import React, { useState } from "react";
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
import Input from "../../components/Input";
import ImageUploader from "../../components/ImageUploader";
import { Button } from "../../components/Button";

export function ConfigAccount() {
  return (
    <Container>
      <Row>
        <ProfileImage></ProfileImage>
        <UserTitle>
          <WelcomeTitle>Olá, Fulano de tal!</WelcomeTitle>
          <Subtitle>Faça as edições necessárias no seu perfil</Subtitle>
        </UserTitle>
      </Row>
      <Column>
        <TopForm>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
        </TopForm>
        <BottomForm>
          <InputDiv>
            <Input name="password" placeholder="Senha" />
          </InputDiv>
          {/* <ImageUploader /> */}
        </BottomForm>
      </Column>
      <Column>
        <TopForm>
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
      </Column>
    </Container>
  );
}
