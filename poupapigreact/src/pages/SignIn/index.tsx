import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//style, assets e icons
import {
  Container,
  Arrow,
  ContainerForm,
  ColumnLeft,
  Title,
  Text,
  Image,
  ColumnRight,
  ColumnRightQuestions,
  Form,
  TopForm,
  ButtonsDiv,
  TextForm,
} from "./style";
import theme from "../../styles/theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SignIn1 from "../../assets/svg/SignIn1.svg";
import SignIn2 from "../../assets/svg/SignIn2.svg";

//importações internas
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import CustomSelect from "../../components/CustomSelect";
import { useAuth } from "../../context/AuthContext";
import { getLogin, postQuestionario, postUsuario } from "../../services/api";
import { UserInt } from "../../interfaces";

const schemaSignIn = yup.object().shape({
  nome_completo: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u00FF\s]+$/, "Apenas letras são permitidas"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  confirmaEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Os e-mails devem ser iguais")
    .required("Campo obrigatório"),
  senha: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "A senha deve conter pelo menos um caractere especial"
    )
    .required("Campo obrigatório"),
  confirmaSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "As senhas devem ser iguais")
    .required("Campo obrigatório"),
  // foto_perfil: yup.mixed().nullable(),
});

const schemaQuestionsPartOne = yup.object().shape({
  banheiros: yup.number().required("Campo obrigatório"),
  trabalhadores_domesticos: yup.number().required("Campo obrigatório"),
  automoveis: yup.number().required("Campo obrigatório"),
  microcomputadores: yup.number().required("Campo obrigatório"),
  maquinas_lavar_roupa: yup.number().required("Campo obrigatório"),
  geladeiras: yup.number().required("Campo obrigatório"),
  freezers: yup.number().required("Campo obrigatório"),
});

const schemaQuestionsPartTwo = yup.object().shape({
  dvds: yup.number().required("Campo obrigatório"),
  fornos_microondas: yup.number().required("Campo obrigatório"),
  motocicletas: yup.number().required("Campo obrigatório"),
  maquinas_secar_roupa: yup.number().required("Campo obrigatório"),
  grau_instrucao: yup.number().required("Campo obrigatório"),
  origem_agua: yup.number().required("Campo obrigatório"),
  tipo_rua: yup.number().required("Campo obrigatório"),
  salario: yup.number().required("Campo obrigatório"),
});

export function SignIn() {
  const navigate = useNavigate();
  const { addToast, setLoading, userCode, login } = useAuth();
  const [emailAdress, setEmailAdress] = useState<string>("");
  const [senhaUser, setSenhaUser] = useState<string>("");
  const [formData, setFormData] = useState({});
  const [currentBody, setCurrentBody] = useState<
    "data" | "questions1" | "questions2"
  >("data");

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });

  const {
    register: registerQuestionsOne,
    handleSubmit: handleSubmitQuestionsOne,
    formState: { errors: errosQuestionsOne },
    setValue: setValueQuestionsOne,
  } = useForm({
    resolver: yupResolver(schemaQuestionsPartOne),
  });

  const {
    register: registerQuestionsTwo,
    handleSubmit: handleSubmitQuestionsTwo,
    formState: { errors: errosQuestionsTwo },
    setValue: setValueQuestionsTwo,
  } = useForm({
    resolver: yupResolver(schemaQuestionsPartTwo),
  });

  const handleGoBack = () => {
    if (currentBody === "data") {
      navigate(-1);
    } else {
      setCurrentBody("data");
    }
  };

  const handleLogin = async (data: any) => {
    const combinedData = { ...formData, ...data, usuario_id: userCode };

    try {
      setLoading(true);
      await postQuestionario(combinedData);
      navigate("/home");
    } catch (error: any) {
      addToast({
        message: error.message,
        type: "error",
        title: "Erro ao postar dados do questionário",
      });
      console.error("Erro ao postar dados do questionário:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionsSecondPart = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentBody("questions2");
  };

  const handleLandpage = () => {
    navigate("/landpage");
  };

  const onSubmitSignIn = async (data: any) => {
    try {
      setLoading(true);
      await postUsuario(data);
      setEmailAdress(data.email);
      setSenhaUser(data.senha);
      setCurrentBody("questions1");
    } catch (error: any) {
      addToast({
        message: error.message,
        type: "error",
        title: "Erro ao fazer sign-in",
      });
      console.error("Erro ao fazer sign-in:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentBody === "questions1") {
        const dados = { email: emailAdress, senha: senhaUser };
        try {
          const usuario: UserInt = await getLogin(dados);
          login(usuario.id);
        } catch (error: any) {
          addToast({
            message: error.message,
            type: "error",
            title: "Erro ao obter dados do login",
          });
          console.error("Erro ao obter dados do login:", error);
        }
      }
    };
    fetchUserData();
  }, [currentBody]);

  const dataForm = (
    <ContainerForm>
      <ColumnLeft>
        <Title>Por que criar uma conta no poupa pig?</Title>
        <Text>
          Ao criar uma conta no Poupa Pig, você terá mais controle sobre suas
          finanças e poderá definir metas claras para seus gastos. Nossa
          plataforma oferece dicas valiosas de economia, um design limpo e
          organizado, além de ser fácil de usar e super rápida. Junte-se à
          família Poupa Pig e faça parte de milhares de brasileiros que estão
          organizando e melhorando suas finanças. Venha ser Poupa Pig!
        </Text>
        <Image src={SignIn1} alt="PoupaPig" />
      </ColumnLeft>
      <ColumnRight>
        <Form>
          <TopForm>
            <Input
              name="nome_completo"
              placeholder="Nome"
              error={errorsSignIn.nome_completo?.message}
              register={registerSignIn}
            />
            <Input
              name="email"
              placeholder="E-mail"
              error={errorsSignIn.email?.message}
              register={registerSignIn}
            />
            <Input
              name="confirmaEmail"
              placeholder="Confirme seu e-mail"
              error={errorsSignIn.confirmaEmail?.message}
              register={registerSignIn}
            />
            <Input
              name="senha"
              placeholder="Senha"
              customType="password"
              error={errorsSignIn.senha?.message}
              register={registerSignIn}
            />
            <Input
              name="confirmaSenha"
              placeholder="Confirme sua senha"
              customType="password"
              error={errorsSignIn.confirmaSenha?.message}
              register={registerSignIn}
            />
          </TopForm>
          {/* <BottomForm>
            <InputDiv></InputDiv>
            <ImageUploader register={registerSignIn("foto_perfil")} />
          </BottomForm> */}
        </Form>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            borderColor={theme.colors.grey6F7}
            backgroundColor={theme.colors.greyB8C}
            onClick={handleLandpage}
          />
          <Button
            title="Avançar"
            onClick={handleSubmitSignIn(onSubmitSignIn)}
          />
        </ButtonsDiv>
      </ColumnRight>
    </ContainerForm>
  );

  const questionsOneForm = (
    <ContainerForm>
      <ColumnLeft>
        <Title>Por que preencher esse formulário?</Title>
        <Text>
          Assim, podemos compreender melhor o seu perfil e os motivos que o
          trouxeram até esta plataforma, permitindo que ofereçamos dicas de
          economia mais precisas e personalizadas para você.
        </Text>
        <Image src={SignIn2} alt="PoupaPig" />
      </ColumnLeft>
      <ColumnRightQuestions>
        <TopForm>
          <TextForm>
            Para seu perfil ficar mais com sua cara, comece respondendo as
            perguntas abaixo:
          </TextForm>
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
            error={errosQuestionsOne.banheiros?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            error={errosQuestionsOne.trabalhadores_domesticos?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            error={errosQuestionsOne.automoveis?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            error={errosQuestionsOne.microcomputadores?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            error={errosQuestionsOne.maquinas_lavar_roupa?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            error={errosQuestionsOne.geladeiras?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            error={errosQuestionsOne.freezers?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
            minus
          />
        </TopForm>
        <ButtonsDiv>
          <Button
            title="Pular questionário"
            borderColor={theme.colors.grey6F7}
            backgroundColor={theme.colors.greyB8C}
            onClick={handleLandpage}
          />
          <Button
            title="Avançar"
            onClick={handleSubmitQuestionsOne(handleQuestionsSecondPart)}
          />
        </ButtonsDiv>
      </ColumnRightQuestions>
    </ContainerForm>
  );

  const questionsTwoForm = (
    <ContainerForm>
      <ColumnLeft>
        <Title>Por que preencher esse formulário?</Title>
        <Text>
          Dessa forma, conseguimos entender melhor o seu perfil e o motivo de
          estar usando essa plataforma, e conseguimos direcionar dicas de
          economia mais certeiras para você.
        </Text>
        <Image src={SignIn2} alt="PoupaPig" />
      </ColumnLeft>
      <ColumnRightQuestions>
        <TopForm>
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
            error={errosQuestionsTwo.dvds?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.fornos_microondas?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.motocicletas?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.maquinas_secar_roupa?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.grau_instrucao?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.origem_agua?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.tipo_rua?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
            error={errosQuestionsTwo.salario?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
            minus
          />
        </TopForm>
        <ButtonsDiv>
          <Button
            title="Pular questionário"
            borderColor={theme.colors.grey6F7}
            backgroundColor={theme.colors.greyB8C}
            onClick={handleLandpage}
          />
          <Button
            title="Avançar"
            onClick={handleSubmitQuestionsTwo(handleLogin)}
          />
        </ButtonsDiv>
      </ColumnRightQuestions>
    </ContainerForm>
  );

  return (
    <Container>
      <Arrow onClick={handleGoBack}>
        <ArrowBackIcon
          style={{ color: theme.colors.blue002, cursor: "pointer" }}
        />
      </Arrow>
      {currentBody === "data" && dataForm}
      {currentBody === "questions1" && questionsOneForm}
      {currentBody === "questions2" && questionsTwoForm}
    </Container>
  );
}
