import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//style, assets e icons
import {
  Container,
  Arrow,
  Image,
  ContainerLogin,
  Options,
  Text,
} from "./style";
import theme from "../../styles/theme";
import Logo from "../../assets/svg/logooficial.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//importações internas
import Input from "../../components/Input";
import { Button } from "../../components/Button";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Campo obrigatório"),
});

export function Login() {
  const navigate = useNavigate();
  const [currentBody, setCurrentBody] = useState<
    "login" | "emailPassword" | "codePassword" | "newPassword"
  >("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
    navigate("/home");
  };

  const handleGoBack = () => {
    if (currentBody === "login") {
      navigate("/landpage");
    } else if (currentBody === "emailPassword") {
      setCurrentBody("login");
    } else if (currentBody === "codePassword") {
      setCurrentBody("emailPassword");
    } else if (currentBody === "newPassword") {
      setCurrentBody("codePassword");
    }
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const bodyLogin = (
    <ContainerLogin>
      <Input
        name="email"
        placeholder="E-mail"
        error={errors.email?.message}
        register={register}
      />
      <Input
        name="password"
        placeholder="Senha"
        customType="password"
        error={errors.password?.message}
        register={register}
      />
      <Options>
        <Text onClick={() => setCurrentBody("emailPassword")}>
          Esqueceu a senha?
        </Text>
        <Text onClick={handleSignIn}>Ainda não tem conta? Cadastre-se!</Text>
      </Options>
      <Button title="Entrar" onClick={handleSubmit(onSubmit)} />
    </ContainerLogin>
  );

  const emailPassword = (
    <ContainerLogin>
      <Options>
        <Text style={{ textDecoration: "none" }}>
          Digite seu e-mail para receber um código de segurança para redefinir
          sua senha:
        </Text>
        <Input name="e-mail" placeholder="E-mail" />
      </Options>
      <Options>
        <Button
          title="Enviar código"
          onClick={() => setCurrentBody("codePassword")}
        />
        <Text onClick={handleSignIn}>Ainda não tem conta? Cadastre-se!</Text>
      </Options>
    </ContainerLogin>
  );

  const codePassword = (
    <ContainerLogin>
      <Options>
        <Text style={{ textDecoration: "none" }}>
          Digite o código recebido:
        </Text>
        <Input name="code-password" placeholder="Código" />
      </Options>
      <Options>
        <Button
          title="Confirmar"
          onClick={() => setCurrentBody("newPassword")}
        />
        <Text style={{ color: "transparent" }}>Div</Text>{" "}
        {/*DEIXAR ISSO ASSIM - é pra ficar na mesma medida do emailPassword */}
      </Options>
    </ContainerLogin>
  );

  const newPassword = (
    <ContainerLogin>
      <Input name="new-password" placeholder="Nova senha" />
      <Input name="confirm-new-password" placeholder="Confirme a nova senha" />
      <Button title="Alterar senha" onClick={() => setCurrentBody("login")} />
    </ContainerLogin>
  );

  return (
    <Container>
      <Arrow onClick={handleGoBack}>
        <ArrowBackIcon
          style={{ color: theme.colors.blue002, cursor: "pointer" }}
        />
      </Arrow>
      <Image src={Logo} alt="PoupaPig" />
      {currentBody === "login" && bodyLogin}
      {currentBody === "emailPassword" && emailPassword}
      {currentBody === "codePassword" && codePassword}
      {currentBody === "newPassword" && newPassword}
    </Container>
  );
}
