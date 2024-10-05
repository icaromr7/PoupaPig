import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import ImageUploader from "../../components/ImageUploader";
import { Button } from "../../components/Button";

export function SignIn() {
  const navigate = useNavigate();
  const [currentBody, setCurrentBody] = useState<"data" | "questions">("data");

  const handleGoBack = () => {
    if (currentBody === "data") {
      navigate(-1);
    } else {
      setCurrentBody("data");
    }
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
            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="E-mail" />
            <Input
              name="email-confirmation"
              placeholder="Confirme seu e-mail"
            />
          </TopForm>
          <BottomForm>
            <InputDiv>
              <Input name="password" placeholder="Senha" />
              <Input
                name="password-confirmation"
                placeholder="Confirme sua senha"
              />
            </InputDiv>
            <ImageUploader />
          </BottomForm>
        </Form>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            borderColor={theme.colors.grey6F7}
            backgroundColor={theme.colors.greyB8C}
          />
          <Button title="Avançar" onClick={() => setCurrentBody("questions")} />
        </ButtonsDiv>
      </ColumnRight>
    </ContainerForm>
  );

  const questionsForm = (
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
          <TextForm>
            Para seu perfil ficar mais com sua cara, comece respondendo as
            perguntas abaixo:
          </TextForm>
          <Input name="1" placeholder="Pergunta 1" />
          <Input name="2" placeholder="Pergunta 2" />
          <Input name="3" placeholder="Pergunta 3" />
          <Input name="4" placeholder="Pergunta 4" />
          <Input name="5" placeholder="Pergunta 5" />
          <Input name="6" placeholder="Pergunta 6" />
          <Input name="7" placeholder="Pergunta 7" />
          <Input name="8" placeholder="Pergunta 8" />
          <Input name="9" placeholder="Pergunta 9" />
          <Input name="10" placeholder="Pergunta 10" />
        </TopForm>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            borderColor={theme.colors.grey6F7}
            backgroundColor={theme.colors.greyB8C}
          />
          <Button title="Avançar" />
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
      {currentBody === "questions" && questionsForm}
    </Container>
  );
}
