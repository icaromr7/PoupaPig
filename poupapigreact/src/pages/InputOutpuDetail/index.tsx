import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  Content,
  Row,
  FirstColumn,
  Column,
  ButtonCard,
  RoundIcon,
  Image,
  TitleButtonCard,
  TitleSentiment,
  ButtonSentiment,
  Icon,
  NameSentiment,
  ButtonsDiv,
} from "./style";
import theme from "../../styles/theme";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Ok from "../../assets/svg/ok.svg";
import Attention from "../../assets/svg/atencao.svg";
import Emergency from "../../assets/svg/emergencia.svg";
import InputOutputForm1 from "../../assets/svg/inputoutputform1.svg";
import InputOutputForm2 from "../../assets/svg/inputoutputform2.svg";
import InputOutputForm3 from "../../assets/svg/inputoutputform3.svg";
import InputOutputForm4 from "../../assets/svg/inputoutputform4.svg";

import Input from "../../components/Input";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";

export function InputOutputDetail() {
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate("/input-output-list");
  };

  const handleInputOutputForm = () => {
    navigate("/input-output-form");
  };
  return (
    <Container>
      <Title>Lançamentos na conta</Title>
      <Content>
        <Row>
          <FirstColumn>
            <Input name="nome" placeholder="Nome" fixedValue="Nome compra" />
            <Input name="valor" placeholder="Valor" fixedValue="Valor compra" />
            <Input name="data" placeholder="Data" fixedValue="Data compra" />
            <Input
              name="categoria"
              placeholder="Categoria"
              fixedValue="Categoria compra"
            />
            <Input
              name="formaPag"
              placeholder="Forma de pagamento"
              fixedValue="Forma de pagamento compra"
            />
            <Input
              name="qtdeParcelas"
              placeholder="Quantidade de parcelas"
              fixedValue="Quantidade de parcelas"
            />
          </FirstColumn>
          <Column>
            <Row>
              <ButtonCard
                style={{
                  color: theme.colors.redF63,
                  backgroundColor: theme.colors.redFFD,
                }}
              >
                <RoundIcon>
                  <ArrowUpwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
                <TitleButtonCard>
                  Estou cadastrando uma{" "}
                  <span style={{ fontWeight: 700, color: theme.colors.redF63 }}>
                    saída
                  </span>
                </TitleButtonCard>
              </ButtonCard>
            </Row>
            <Row>
              <ButtonCard
                style={{
                  color: theme.colors.blue002,
                  backgroundColor: theme.colors.whiteF2F,
                }}
              >
                <Image src={InputOutputForm2} alt="PoupaPig" />
                <TitleButtonCard>
                  Este lançamento é apenas um{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.yellowDAD }}
                  >
                    talvez
                  </span>
                </TitleButtonCard>
              </ButtonCard>
            </Row>
            <Row>
              <ButtonCard
                style={{
                  color: theme.colors.redF63,
                  backgroundColor: theme.colors.whiteF2F,
                }}
              >
                <Image src={InputOutputForm4} alt="PoupaPig" />
                <TitleButtonCard>
                  Este lançamento é{" "}
                  <span style={{ fontWeight: 700, color: theme.colors.redF63 }}>
                    único
                  </span>{" "}
                  e{" "}
                  <span style={{ fontWeight: 700, color: theme.colors.redF63 }}>
                    variável
                  </span>
                </TitleButtonCard>
              </ButtonCard>
            </Row>
          </Column>
        </Row>
        <Row>
          <TextField
            placeholder="Observações ou anotações extras"
            fixedValue="pipiippopopopopopipiopipopipiopipiçopioipipoipoi"
          />
        </Row>
        <Row>
          <TitleSentiment>Como eu me senti com essa compra</TitleSentiment>
        </Row>
        <Row style={{ justifyContent: "space-evenly" }}>
          <ButtonSentiment style={{ color: theme.colors.green0FB }}>
            <Icon src={Ok} alt="PoupaPig" />
            <NameSentiment>{`Feliz, animada(o)`}</NameSentiment>
          </ButtonSentiment>
          <ButtonSentiment style={{ color: theme.colors.yellowDAD }}>
            <Icon src={Attention} alt="PoupaPig" />
            <NameSentiment>{`Tensa(o), ansiosa(o)`}</NameSentiment>
          </ButtonSentiment>
          <ButtonSentiment style={{ color: theme.colors.redF63 }}>
            <Icon src={Emergency} alt="PoupaPig" />
            <NameSentiment>{`Triste, miserável`}</NameSentiment>
          </ButtonSentiment>
        </Row>
        <ButtonsDiv>
          <Button
            title="Voltar"
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={handleGoback}
          />
          <Button title="Salvar" onClick={handleInputOutputForm} />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
