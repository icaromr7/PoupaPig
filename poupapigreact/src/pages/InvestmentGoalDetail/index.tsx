import React, { useState } from "react";

//style, icons e assets
import {
  Container,
  Title,
  FormRegister,
  Line,
  FormRegisterRight,
  ButtonsDiv,
  FirtsColumn,
  ValueInvestment,
  TitleInvestment,
  Values,
  ValueDiv,
  DollarSign,
  InvestmentValue,
  Situation,
} from "./style";
import theme from "../../styles/theme";

//importações internas
import Input from "../../components/Input";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { numberToCurrency } from "../../utils/bibli";
import DataTable from "../../components/DataTable";

interface InvestmentGoalDetailProps {
  type?: "investment" | "goal";
}

export function InvestmentGoalDetail({ type }: InvestmentGoalDetailProps) {
  const navigate = useNavigate();

  const handleInvestmentGoalForm = () => {
    navigate("/investment-goal-form");
  };
  return (
    <Container>
      <Title>{type === "investment" ? `Investimento` : `Meta`} </Title>
      <FirtsColumn>
        <FormRegister>
          <Input
            name="nome"
            placeholder="Nome"
            fixedValue="Nome do investimento"
          />
          <Input
            name="valorFoco"
            placeholder="Valor foco"
            fixedValue="R$000,00"
          />
          <Input
            name="dataLimite"
            placeholder="Data limite"
            fixedValue="12/120/2024"
          />

          {type === "investment" && (
            <>
              <Input name="tipo" placeholder="Tipo" fixedValue="Alguma coisa" />
              <Input
                name="dataRetirada"
                placeholder="Data permitida para retirada"
                fixedValue="12/120/2024"
              />
              <Input
                name="instituição"
                placeholder="Instituição"
                fixedValue="Pipipipopopo"
              />
              <Line>
                <Input
                  name="porcentagem"
                  placeholder="Porcentagem investimento"
                  fixedValue="00%"
                />

                <Input
                  name="rendimento"
                  placeholder="Rendimento"
                  fixedValue="Mensal"
                />
              </Line>
              <Input
                name="valorInvestimento"
                placeholder="Valor investimento"
                fixedValue="R$000.000,00"
              />
            </>
          )}
        </FormRegister>
        <FormRegisterRight>
          <TextField
            placeholder="Observações ou anotações extras"
            fixedValue="Isso é um teste favor ignorar o texto Isso é um teste favor ignorar o texto Isso é um teste favor ignorar o texto."
          />
          <ValueInvestment>
            <TitleInvestment>Valor inicial do investimento</TitleInvestment>
            <Values>
              <ValueDiv>
                <DollarSign style={{ alignSelf: "flex-start" }}>R$</DollarSign>
                <InvestmentValue>{numberToCurrency(2000)}</InvestmentValue>
                <Situation style={{ alignSelf: "flex-end" }}>
                  inicialmente investido
                </Situation>
              </ValueDiv>
              <ValueDiv
                style={{
                  color: theme.colors.green0FB,
                  borderColor: theme.colors.green0FB,
                }}
              >
                <DollarSign style={{ alignSelf: "flex-start" }}>R$</DollarSign>
                <InvestmentValue>{numberToCurrency(2189.56)}</InvestmentValue>
                <Situation style={{ alignSelf: "flex-end" }}>
                  atualmente investido
                </Situation>
              </ValueDiv>
            </Values>
          </ValueInvestment>
          {/* <DataTable /> */}
          <ButtonsDiv>
            <Button
              title="Voltar"
              backgroundColor={theme.colors.greyB8C}
              borderColor={theme.colors.grey6F7}
            />
            <Button title="Editar" onClick={handleInvestmentGoalForm} />
          </ButtonsDiv>
        </FormRegisterRight>
      </FirtsColumn>
    </Container>
  );
}
