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
import { useAuth } from "../../context/AuthContext";
import { getLogin } from "../../services/api";
import { UserInt } from "../../interfaces";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
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
});

const emailSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
});

const codeSchema = yup.object().shape({
  codePassword: yup.string().required("Campo obrigatório"),
});

const schemaPassword = yup.object().shape({
  newPassword: yup
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

  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "As senhas devem ser iguais")
    .required("Campo obrigatório"),
});

export function Login() {
  const navigate = useNavigate();
  const { addToast, setLoading, login } = useAuth();
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

  const {
    register: registerEmailPassword,
    handleSubmit: handleSubmitEmailPassword,
    formState: { errors: errorsEmailPassword },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const {
    register: registerCodeEmail,
    handleSubmit: handleSubmitCodeEmail,
    formState: { errors: errorsCodeEmail },
  } = useForm({
    resolver: yupResolver(codeSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handlePassword,
    formState: { errors: errorsPassword },
  } = useForm({
    resolver: yupResolver(schemaPassword),
  });

  const onSubmitLogin = async (data: any) => {
    try {
      setLoading(true);
      const dados = { email: data.email, senha: data.senha };
      const usuario: UserInt = await getLogin(dados);
      login(usuario.id);
      navigate("/home");
    } catch (error: any) {
      addToast({
        message: error.message,
        type: "error",
        title: "Erro ao obter dados do login",
      });
      console.error("Erro ao obter dados do login:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitEmailPassword = (data: any) => {
    setCurrentBody("codePassword");
  };

  const onSubmitCodePassword = (data: any) => {
    setCurrentBody("newPassword");
  };

  const onSubmitNewPassword = (data: any) => {
    setCurrentBody("login");
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

  const handleSignIn = async () => {
    try {
      // const user = await getLogin();
      navigate("/sign-in");
    } catch (error: any) {
      addToast({
        message: error.message,
        type: "error",
        title: "Erro ao fazer login",
      });
      console.error("Erro ao fazer login:", error);
    }
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
        name="senha"
        placeholder="Senha"
        customType="password"
        error={errors.senha?.message}
        register={register}
      />
      <Options>
        <Text onClick={() => setCurrentBody("emailPassword")}>
          Esqueceu a senha?
        </Text>
        <Text onClick={handleSignIn}>Ainda não tem conta? Cadastre-se!</Text>
      </Options>
      <Button title="Entrar" onClick={handleSubmit(onSubmitLogin)} />
    </ContainerLogin>
  );

  const emailPassword = (
    <ContainerLogin>
      <Options>
        <Text style={{ textDecoration: "none" }}>
          Digite seu e-mail para receber um código de segurança para redefinir
          sua senha:
        </Text>
        <Input
          name="email"
          placeholder="E-mail"
          error={errorsEmailPassword.email?.message}
          register={registerEmailPassword}
        />
      </Options>
      <Options>
        <Button
          title="Enviar código"
          onClick={handleSubmitEmailPassword(onSubmitEmailPassword)}
        />
      </Options>
    </ContainerLogin>
  );

  const codePassword = (
    <ContainerLogin>
      <Options>
        <Text style={{ textDecoration: "none" }}>
          Digite o código recebido:
        </Text>
        <Input
          name="codePassword"
          placeholder="Código"
          error={errorsCodeEmail.codePassword?.message}
          register={registerCodeEmail}
        />
      </Options>
      <Options>
        <Button
          title="Confirmar"
          onClick={handleSubmitCodeEmail(onSubmitCodePassword)}
        />
        <Text style={{ color: "transparent" }}>Div</Text>{" "}
        {/*DEIXAR ISSO ASSIM - é pra ficar na mesma medida do emailPassword */}
      </Options>
    </ContainerLogin>
  );

  const newPassword = (
    <ContainerLogin>
      <Input
        name="newPassword"
        placeholder="Senha"
        customType="password"
        error={errorsPassword.newPassword?.message}
        register={registerPassword}
      />
      <Input
        name="confirmNewPassword"
        placeholder="Confirme a nova senha"
        customType="password"
        error={errorsPassword.confirmNewPassword?.message}
        register={registerPassword}
      />
      <Button
        title="Alterar senha"
        onClick={handlePassword(onSubmitNewPassword)}
      />
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
