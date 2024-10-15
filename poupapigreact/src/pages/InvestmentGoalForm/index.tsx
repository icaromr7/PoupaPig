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
} from "./style";
import theme from "../../styles/theme";

//importações internas
import Input from "../../components/Input";
import CustomSelect from "../../components/CustomSelect";
import CustomSelectDate from "../../components/CustomSelectDate";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import { useNavigate } from "react-router-dom";

export function InvestmentGoalForm() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [investment, setInvestment] = useState<boolean>(false);
  const [goal, setGoal] = useState<boolean>(false);
  const data = ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5"];
  const [textValue, setTextValue] = useState<string>("");

  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log("Data selecionada:", date);
  };

  const handleInvestment = (checked: boolean) => {
    if (checked) {
      setInvestment(true);
      setGoal(false);
    } else {
      setInvestment(false);
    }
  };

  const handleGoal = (checked: boolean) => {
    if (checked) {
      setGoal(true);
      setInvestment(false);
    } else {
      setGoal(false);
    }
  };

  const handleInvestmentGoalList = () => {
    navigate("/investment-goal-list");
  };

  const handleCancelForm = () => {
    navigate("/new-transaction");
  };
  return (
    <Container>
      <Title>Investimentos ou metas</Title>
      <FirtsColumn>
        <FormRegister>
          <Input name="nome" placeholder="Nome" />
          <Input name="valorFoco" placeholder="Valor foco" />
          <CustomSelectDate
            placeholder="Data limite"
            onDateChange={handleDateChange}
          />
          <Line style={{ alignSelf: "center", gap: 100 }}>
            <Checkbox
              label="Investimento"
              checked={investment}
              onChange={handleInvestment}
            />
            <Checkbox label="Meta" checked={goal} onChange={handleGoal} />
          </Line>

          {investment && (
            <>
              <CustomSelect
                placeholder="Tipo"
                data={data}
                onSelect={(option: any) =>
                  console.log("Opção selecionada:", option)
                }
              />
              <CustomSelectDate
                placeholder="Data permitida para retirada"
                onDateChange={handleDateChange}
              />
              <CustomSelect
                placeholder="Instituição"
                data={data}
                onSelect={(option: any) =>
                  console.log("Opção selecionada:", option)
                }
              />
              <Line>
                <Input
                  name="porcentagem"
                  placeholder="Porcentagem investimento"
                />
                <CustomSelect
                  placeholder="Rendimento"
                  data={data}
                  onSelect={(option: any) =>
                    console.log("Opção selecionada:", option)
                  }
                />
              </Line>
              <Input
                name="valorInvestimento"
                placeholder="Valor investimento"
              />
            </>
          )}
        </FormRegister>
        <FormRegisterRight>
          <TextField
            placeholder="Observações ou anotações extras"
            value={textValue}
            onChange={handleTextChange}
          />
          <ButtonsDiv>
            <Button
              title="Cancelar"
              backgroundColor={theme.colors.greyB8C}
              borderColor={theme.colors.grey6F7}
              onClick={handleCancelForm}
            />
            <Button title="Salvar" onClick={handleInvestmentGoalList} />
          </ButtonsDiv>
        </FormRegisterRight>
      </FirtsColumn>
    </Container>
  );
}
