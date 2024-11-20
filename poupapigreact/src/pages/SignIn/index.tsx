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
  BottomForm,
  InputDiv,
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
import { getLogin, postUsuario } from "../../services/api";

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
  questao1: yup.string().required("Campo obrigatório"),
  questao2: yup.string().required("Campo obrigatório"),
  questao3: yup.string().required("Campo obrigatório"),
  questao4: yup.string().required("Campo obrigatório"),
  questao5: yup.string().required("Campo obrigatório"),
  questao6: yup.string().required("Campo obrigatório"),
  questao7: yup.string().required("Campo obrigatório"),
});

const schemaQuestionsPartTwo = yup.object().shape({
  questao8: yup.string().required("Campo obrigatório"),
  questao9: yup.string().required("Campo obrigatório"),
  questao10: yup.string().required("Campo obrigatório"),
  questao11: yup.string().required("Campo obrigatório"),
  questao12: yup.string().required("Campo obrigatório"),
  questao13: yup.string().required("Campo obrigatório"),
  questao14: yup.string().required("Campo obrigatório"),
  questao15: yup.string().required("Campo obrigatório"),
});

export function SignIn() {
  const navigate = useNavigate();
  const { addToast, setLoading } = useAuth();
  const [emailAdress, setEmailAdress] = useState<string>("");
  const [senhaUser, setSenhaUser] = useState<string>("");
  const [user, setUser] = useState<number>(0);
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

  const handleLogin = (data: any) => {
    console.log("Dados do formulário:", data);
    navigate("/login");
  };

  const handleQuestionsSecondPart = (data: any) => {
    console.log("Dados do formulário:", data);

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
      addToast({ message: error.message, type: "error" });
      console.error("Erro ao fazer sign-in:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("entrei no useEffect");
    const fetchUserData = async () => {
      console.log("current body", currentBody);
      if (currentBody === "questions1") {
        const dados = { email: emailAdress, senha: senhaUser };
        try {
          console.log("no try");
          const usuario = await getLogin(dados);
          console.log("usuario", usuario);
        } catch (error) {
          console.error("Erro ao obter dados do login:", error);
        }
      }
    };
    fetchUserData();
  }, [currentBody]);

  const handleSelect = (option: string) => {
    console.log("option", option);
  };

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
            name="questao1"
            title="Quantos banheiros tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao1?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
          />

          <CustomSelect
            name="questao2"
            title="Quantos trabalhadores domésticos tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao2?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
          />
          <CustomSelect
            name="questao3"
            title="Quantos automóveis tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao3?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
          />
          <CustomSelect
            name="questao4"
            title="Quantos microcomputadores tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao4?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
          />
          <CustomSelect
            name="questao5"
            title="Quantas máquinas de lavar roupa tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao5?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
          />
          <CustomSelect
            name="questao6"
            title="Quantas geladeiras tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao6?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
          />
          <CustomSelect
            name="questao7"
            title="Quantos freezers tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsOne.questao7?.message}
            register={registerQuestionsOne}
            setValue={setValueQuestionsOne}
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
            name="questao8"
            title="Quantos DVDs tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao8?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao9"
            title="Quantos fornos de micro-ondas tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao9?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao10"
            title="Quantas motocicletas tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao10?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao11"
            title="Quantas máquinas secadoras de roupas tem no seu domicílio?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "zero" },
              { id: 1, nome: "um" },
              { id: 2, nome: "dois" },
              { id: 3, nome: "três" },
              { id: 4, nome: "quatro ou mais" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao11?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao12"
            title="Qual é o grau de instrução do chefe da família?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "Analfabeto/Fundamental I incompleto" },
              {
                id: 1,
                nome: "Fundamental I completo/Fundamental II incompleto",
              },
              { id: 2, nome: "Fundamental II completo/Médio incompleto" },
              { id: 3, nome: "Médio completo/Superior incompleto" },
              { id: 4, nome: "Superior completo" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao12?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao13"
            title="A água utilizada no seu domicílio é proveniente de?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "Rede geral de distribuição" },
              { id: 1, nome: "Poço ou nascente" },
              { id: 2, nome: "Outro meio" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao13?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao14"
            title="A rua do seu domicílio é?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "Asfaltada/Pavimentada" },
              { id: 1, nome: "Terra/Cascalho" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao14?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
          />
          <CustomSelect
            name="questao15"
            title="Qual valor se aproxima mais da sua renda mensal familiar (soma do salário de todos que moram com você)?"
            placeholder="Escolha"
            data={[
              { id: 0, nome: "até R$1.500,00" },
              { id: 1, nome: "De R$1.500,00 a R$2.500,00" },
              { id: 2, nome: "De R$2.500,00 a R$5.000,00" },
              { id: 3, nome: "De R$5.000,00 a R$10.000,00" },
              { id: 4, nome: "De R$10.000,00 a R$20.000,00" },
              { id: 5, nome: "Acima de R$20.000,00" },
            ]}
            onSelect={handleSelect}
            error={errosQuestionsTwo.questao15?.message}
            register={registerQuestionsTwo}
            setValue={setValueQuestionsTwo}
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
