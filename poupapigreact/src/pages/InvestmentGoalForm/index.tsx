import React, { useState } from "react";

//style, icons e assets
import {
  Container,
  Title,
  FormRegister,
  Line,
  FormRegisterRight,
  ButtonsDiv,
} from "./style";
import theme from "../../styles/theme";

//importações internas
import Input from "../../components/Input";
import CustomSelect from "../../components/CustomSelect";
import CustomSelectDate from "../../components/CustomSelectDate";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";

export function InvestmentGoalForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const data = ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5"];
  const [textValue, setTextValue] = useState<string>("");

  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log("Data selecionada:", date);
  };

  return (
    <Container>
      <Title>Investimentos ou metas</Title>
      <FormRegister>
        <Input name="nome" placeholder="Nome" />
        <Input name="valorFoco" placeholder="Valor foco" />
        <CustomSelectDate
          placeholder="Data limite"
          onDateChange={handleDateChange}
        />
        <CustomSelect
          placeholder="Investimento ou meta?"
          data={data}
          onSelect={(option: any) => console.log("Opção selecionada:", option)}
        />
        <CustomSelect
          placeholder="Tipo"
          data={data}
          onSelect={(option: any) => console.log("Opção selecionada:", option)}
        />
        <CustomSelectDate
          placeholder="Data permitida para retirada"
          onDateChange={handleDateChange}
        />
        <CustomSelect
          placeholder="Instituição"
          data={data}
          onSelect={(option: any) => console.log("Opção selecionada:", option)}
        />
        <Line>
          <Input name="porcentagem" placeholder="Porcentagem investimento" />
          <CustomSelect
            placeholder="Rendimento"
            data={data}
            onSelect={(option: any) =>
              console.log("Opção selecionada:", option)
            }
          />
        </Line>
        <Input name="valorInvestimento" placeholder="Valor investimento" />
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
          />
          <Button title="Salvar" />
        </ButtonsDiv>
      </FormRegisterRight>
    </Container>
  );
}
