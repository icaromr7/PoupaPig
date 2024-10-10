import React, { useEffect, useState } from "react";

//styles, assets, icons
import {
  Container,
  Title,
  ResumeContainer,
  SituationMessage,
  Image,
  Message,
  ValueContainer,
  Value,
  DollarSign,
  ValueNumber,
  TypeValue,
} from "./style";
import theme from "../../styles/theme";
import Ok from "../../assets/svg/ok.svg";
import Attention from "../../assets/svg/atencao.svg";
import Emergency from "../../assets/svg/emergencia.svg";

//importações internas
import { numberToCurrency } from "../../utils/bibli";
import { Button } from "../Button";

interface FinancialControlProfileProps {
  situation: "ok" | "attention" | "emergency";
}

export function FinancialControlProfile({
  situation,
}: FinancialControlProfileProps) {
  const [messageSituation, setMessageSituation] = useState<string>("");
  const [iconSituation, setIconSituation] = useState<string>("");

  useEffect(() => {
    switch (situation) {
      case "ok":
        setMessageSituation("Parabéns! Suas finanças estão sob controle.");
        setIconSituation(Ok);
        break;
      case "attention":
        setMessageSituation("Opa! Precisa tomar cuidado com os gastos.");
        setIconSituation(Attention);
        break;
      case "emergency":
        setMessageSituation("Socorro! Pare de gastar agora!");
        setIconSituation(Emergency);
        break;
      default:
        break;
    }
  }, []);

  const valueSign = (type: string, value: number) => {
    return (
      <ValueContainer>
        <Value>
          <DollarSign>R$</DollarSign>
          <ValueNumber>{numberToCurrency(value)}</ValueNumber>
        </Value>
        <TypeValue>{type}</TypeValue>
      </ValueContainer>
    );
  };

  return (
    <Container>
      <Title>Seu controle financeiro</Title>
      <ResumeContainer>
        {valueSign("livres", 2189.56)}
        <SituationMessage>
          <Image src={iconSituation} alt="PoupaPig" />
          <Message>{messageSituation}</Message>
        </SituationMessage>
      </ResumeContainer>
      {valueSign("gasto", 1053.41)}
      {valueSign("devendo", 548.29)}
      {valueSign("orçado", 289)}
      {valueSign("livre sem valor dos orçamentos", 1900.56)}
      {valueSign("investido", 15000)}
      <Button title="Adicionar transação" />
    </Container>
  );
}
