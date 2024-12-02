import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//estilização
import {
  Container,
  Row,
  ProfileImage,
  UserTitle,
  WelcomeTitle,
  Subtitle,
  Column,
  TopForm,
  BottomForm,
  InputDiv,
  ButtonsDiv,
  TextForm,
} from "./style";
import theme from "../../styles/theme";

//importações internas
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import CustomSelect from "../../components/CustomSelect";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  getQuestionarioById,
  getUsuarioById,
  putQuestionario,
  putUsuario,
} from "../../services/api";
import { UserInt } from "../../interfaces";

const schemaSignIn = yup.object().shape({
  nome_completo: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u00FF\s]+$/, "Apenas letras são permitidas")
    .nullable()
    .notRequired(),
  email: yup.string().email("E-mail inválido").nullable().notRequired(),
  senha: yup
    .string()
    .nullable()
    .notRequired()
    .test({
      name: "senha",
      message:
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial",
      test: (value) => {
        if (!value) return true; // Campo opcional
        const hasMinLength = value.length >= 8;
        const hasLowercase = /[a-z]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        return (
          hasMinLength &&
          hasLowercase &&
          hasUppercase &&
          hasNumber &&
          hasSpecialChar
        );
      },
    }),
});

const schemaQuestions = yup.object().shape({
  banheiros: yup.number().required("Campo obrigatório"),
  trabalhadores_domesticos: yup.number().required("Campo obrigatório"),
  automoveis: yup.number().required("Campo obrigatório"),
  microcomputadores: yup.number().required("Campo obrigatório"),
  maquinas_lavar_roupa: yup.number().required("Campo obrigatório"),
  geladeiras: yup.number().required("Campo obrigatório"),
  freezers: yup.number().required("Campo obrigatório"),
  dvds: yup.number().required("Campo obrigatório"),
  fornos_microondas: yup.number().required("Campo obrigatório"),
  motocicletas: yup.number().required("Campo obrigatório"),
  maquinas_secar_roupa: yup.number().required("Campo obrigatório"),
  grau_instrucao: yup.number().required("Campo obrigatório"),
  origem_agua: yup.number().required("Campo obrigatório"),
  tipo_rua: yup.number().required("Campo obrigatório"),
  salario: yup.number().required("Campo obrigatório"),
});

export function ConfigAccount() {
  const navigate = useNavigate();
  const { addToast, setLoading, userCode } = useAuth();
  const [user, setUser] = useState<UserInt>();

  console.log("user code", userCode);

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });

  const {
    register: registerQuestions,
    handleSubmit: handleSubmitQuestions,
    formState: { errors: errosQuestions },
    setValue: setValueQuestions,
  } = useForm({
    resolver: yupResolver(schemaQuestions),
  });

  const handleChangeQuestions = async (data: any) => {
    const combinedData = { ...data, usuario_id: userCode };
    console.log("Dados combinados:", combinedData);

    try {
      setLoading(true);
      await putQuestionario(combinedData);
      navigate("/profile");
    } catch (error: any) {
      addToast({ message: error.message, type: "error" });
      console.error("Erro ao postar dados do questionário:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserData = async (data: any) => {
    const combinedData = { ...data, id: userCode };
    console.log("Dados combinados:", combinedData);

    try {
      setLoading(true);
      await putUsuario(combinedData, Number(userCode));
      navigate("/profile");
    } catch (error: any) {
      addToast({ message: error.message, type: "error" });
      console.error("Erro ao postar dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const questionarioData = await getQuestionarioById(Number(userCode));
        const usuario = await getUsuarioById(Number(userCode));
        setUser(usuario);
        console.log("usuario", usuario);
      } catch (error: any) {
        addToast({ message: error.message, type: "error" });
        console.error("Erro ao buscar dados do usuário:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userCode]);

  return (
    <Container>
      <Row>
        <UserTitle>
          <WelcomeTitle>Olá, Fulano de tal!</WelcomeTitle>
          <Subtitle>Faça as edições necessárias no seu perfil</Subtitle>
        </UserTitle>
      </Row>
      <Column>
        <TopForm>
          <Input
            name="nome_completo"
            placeholder="Nome"
            error={errorsSignIn.nome_completo?.message}
            register={registerSignIn}
            fixedValue={user && user.nome_completo}
            isUser
            isEditing
          />
          <Input
            name="email"
            placeholder="E-mail"
            error={errorsSignIn.email?.message}
            register={registerSignIn}
            fixedValue={user && user.email}
            isUser
            isEditing
          />
          <Input
            name="senha"
            placeholder="Senha"
            customType="password"
            error={errorsSignIn.senha?.message}
            register={registerSignIn}
            fixedValue={user && user.senha}
            isUser
            isEditing
          />
          <ButtonsDiv>
            <Button
              title="Cancelar"
              borderColor={theme.colors.grey6F7}
              backgroundColor={theme.colors.greyB8C}
            />
            <Button
              title="Salvar dados"
              onClick={handleSubmitSignIn(handleUserData)}
            />
          </ButtonsDiv>
        </TopForm>
      </Column>
      <Column>
        <TopForm>
          <CustomSelect
            name="banheiros"
            title="Quantos banheiros tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.banheiros?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />

          <CustomSelect
            name="trabalhadores_domesticos"
            title="Quantos trabalhadores domésticos tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.trabalhadores_domesticos?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="automoveis"
            title="Quantos automóveis tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.automoveis?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="microcomputadores"
            title="Quantos microcomputadores tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.microcomputadores?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="maquinas_lavar_roupa"
            title="Quantas máquinas de lavar roupa tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.maquinas_lavar_roupa?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="geladeiras"
            title="Quantas geladeiras tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.geladeiras?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="freezers"
            title="Quantos freezers tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.freezers?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="dvds"
            title="Quantos DVDs tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.dvds?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="fornos_microondas"
            title="Quantos fornos de micro-ondas tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.fornos_microondas?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="motocicletas"
            title="Quantas motocicletas tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.motocicletas?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="maquinas_secar_roupa"
            title="Quantas máquinas secadoras de roupas tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Zero" },
              { id: 2, nome: "Um" },
              { id: 3, nome: "Dois" },
              { id: 4, nome: "Três" },
              { id: 5, nome: "Quatro ou mais" },
            ]}
            error={errosQuestions.maquinas_secar_roupa?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="grau_instrucao"
            title="Qual é o grau de instrução do chefe da família?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Analfabeto/Fundamental I incompleto" },
              {
                id: 2,
                nome: "Fundamental I completo/Fundamental II incompleto",
              },
              { id: 3, nome: "Fundamental II completo/Médio incompleto" },
              { id: 4, nome: "Médio completo/Superior incompleto" },
              { id: 5, nome: "Superior completo" },
            ]}
            error={errosQuestions.grau_instrucao?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="origem_agua"
            title="A água utilizada no seu domicílio é proveniente de?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Rede geral de distribuição" },
              { id: 2, nome: "Poço ou nascente" },
              { id: 3, nome: "Outro meio" },
            ]}
            error={errosQuestions.origem_agua?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="tipo_rua"
            title="A rua do seu domicílio é?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "Asfaltada/Pavimentada" },
              { id: 2, nome: "Terra/Cascalho" },
            ]}
            error={errosQuestions.tipo_rua?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
          <CustomSelect
            name="salario"
            title="Qual valor se aproxima mais da sua renda mensal familiar (soma do salário de todos que moram com você)?"
            placeholder="Escolha"
            data={[
              { id: 1, nome: "até R$1.500,00" },
              { id: 2, nome: "De R$1.500,00 a R$2.500,00" },
              { id: 3, nome: "De R$2.500,00 a R$5.000,00" },
              { id: 4, nome: "De R$5.000,00 a R$10.000,00" },
              { id: 5, nome: "De R$10.000,00 a R$20.000,00" },
              { id: 6, nome: "Acima de R$20.000,00" },
            ]}
            error={errosQuestions.salario?.message}
            register={registerQuestions}
            setValue={setValueQuestions}
            minus
          />
        </TopForm>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            borderColor={theme.colors.grey6F7}
            backgroundColor={theme.colors.greyB8C}
          />
          <Button
            title="Salvar questionário"
            onClick={handleSubmitQuestions(handleChangeQuestions)}
          />
        </ButtonsDiv>
      </Column>
    </Container>
  );
}
