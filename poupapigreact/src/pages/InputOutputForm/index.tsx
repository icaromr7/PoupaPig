import React, { useState } from "react";

//style, icons e assets
import {
  Container,
  Title,
  Content,
  Row,
  FirstColumn,
  Column,
  ButtonCard,
  RoundIcon,
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

//importações internas
import Input from "../../components/Input";
import CustomSelectDate from "../../components/CustomSelectDate";
import CustomSelect from "../../components/CustomSelect";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function InputOutputForm() {
  const navigate = useNavigate();
  const data = ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5"];

  const handleDateChange = (date: Date | null) => {
    console.log("Data selecionada:", date);
  };

  const handleCancelForm = () => {
    navigate("/new-transaction");
  };

  const handleInvestmentGoalList = () => {
    navigate("/input-output-list");
  };

  return (
    <Container>
      <Title>Lançamentos na conta</Title>
      <Content>
        <Row>
          <FirstColumn>
            <Input name="nome" placeholder="Nome" />
            <Input name="valor" placeholder="Valor" />
            <CustomSelectDate
              placeholder="Data"
              onDateChange={handleDateChange}
            />
            <CustomSelect
              placeholder="Categoria"
              data={data}
              onSelect={(option: any) =>
                console.log("Opção selecionada:", option)
              }
            />
            <CustomSelect
              placeholder="Forma de pagamento"
              data={data}
              onSelect={(option: any) =>
                console.log("Opção selecionada:", option)
              }
            />
            <Input name="qtdeParcelas" placeholder="Quantidade de parcelas" />
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
              <ButtonCard
                style={{
                  color: theme.colors.green0FB,
                  backgroundColor: theme.colors.greenDCF,
                }}
              >
                <RoundIcon>
                  <ArrowDownwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
                <TitleButtonCard>
                  Estou cadastrando uma{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.green0FB }}
                  >
                    entrada
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
                <RoundIcon>
                  <ArrowUpwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
                <TitleButtonCard>
                  Este lançamento é uma{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.green0FB }}
                  >
                    certeza
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              <ButtonCard
                style={{
                  color: theme.colors.blue002,
                  backgroundColor: theme.colors.whiteF2F,
                }}
              >
                <RoundIcon>
                  <ArrowDownwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
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
                  color: theme.colors.blue038,
                  backgroundColor: theme.colors.whiteF2F,
                }}
              >
                <RoundIcon>
                  <ArrowUpwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
                <TitleButtonCard>
                  Este lançamento é{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.blue038 }}
                  >
                    fixo
                  </span>{" "}
                  e{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.blue038 }}
                  >
                    recorrente
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              <ButtonCard
                style={{
                  color: theme.colors.redF63,
                  backgroundColor: theme.colors.whiteF2F,
                }}
              >
                <RoundIcon>
                  <ArrowDownwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
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
          <TextField placeholder="Observações ou anotações extras" />
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
            title="Cancelar"
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={handleCancelForm}
          />
          <Button title="Salvar" onClick={handleInvestmentGoalList} />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
