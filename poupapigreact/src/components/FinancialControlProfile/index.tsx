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
import { useNavigate } from "react-router-dom";

interface FinancialControlProfileProps {
  situation: "ok" | "attention" | "emergency";
}

interface ClientSituationProps {
  valor_livre: number;
  valor_gastos: number;
  valor_devendo: number;
  valor_orcado: number;
  valor_livre_sem_devedor: number;
  valor_investido: number;
}

export function FinancialControlProfile() {
  const navigate = useNavigate();
  const [messageSituation, setMessageSituation] = useState<string>("");
  const [iconSituation, setIconSituation] = useState<string>("");
  const [situation, setSituation] = useState<
    "ok" | "attention" | "emergency"
  >();
  const [hex, setHex] = useState<string>("");
  const [hexBackground, setHexBackground] = useState<string>("");

  const clientData: ClientSituationProps = {
    valor_livre: 2189.56,
    valor_gastos: 1053.41,
    valor_devendo: 1000.56,
    valor_orcado: 289,
    valor_livre_sem_devedor: 1900.56,
    valor_investido: 15000,
  };

  const handleNewTransaction = () => {
    navigate("/new-transaction");
  };

  useEffect(() => {
    const calculo =
      clientData.valor_livre_sem_devedor - clientData.valor_devendo;

    if (calculo > 0) {
      setSituation("ok");
      setHex(theme.colors.green0FB);
      setHexBackground(theme.colors.greenBFF);
      setMessageSituation("Parabéns! Suas finanças estão sob controle.");
      setIconSituation(Ok);
      return;
    }
    if (calculo === 0) {
      setSituation("attention");
      setHex(theme.colors.yellowDAD);
      setHexBackground(theme.colors.yellowF9F);
      setMessageSituation("Opa! Precisa tomar cuidado com os gastos.");
      setIconSituation(Attention);
      return;
    }
    if (calculo < 0) {
      setSituation("emergency");
      setHex(theme.colors.redF63);
      setHexBackground(theme.colors.redF3A);
      setMessageSituation(
        "Socorro! Pare de gastar, você vai ficar com saldo negativo."
      );
      setIconSituation(Emergency);
      return;
    }
  }, []);

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  };

  const valueSign = (type: string, value: number, hex: string) => {
    return (
      <ValueContainer $hex={hexToRgb(hex)}>
        <Value>
          <DollarSign>R$</DollarSign>
          <ValueNumber>{numberToCurrency(value)}</ValueNumber>
        </Value>
        <TypeValue>{type}</TypeValue>
      </ValueContainer>
    );
  };

  return (
    <Container $hex={hexToRgb(hex)}>
      <Title>Seu controle financeiro</Title>
      <ResumeContainer $hex={hexToRgb(hexBackground)}>
        {valueSign("livres", 2189.56, hex)}
        <SituationMessage>
          <Image src={iconSituation} alt="PoupaPig" />
          <Message>{messageSituation}</Message>
        </SituationMessage>
      </ResumeContainer>
      {valueSign("gasto", 1053.41, theme.colors.redF63)}
      {valueSign("devendo", 548.29, theme.colors.yellowDAD)}
      {valueSign("orçado", 289, theme.colors.orangeEE7)}
      {valueSign(
        "livre sem valor dos orçamentos",
        1900.56,
        theme.colors.greenAEC
      )}
      {valueSign("investido", 15000, theme.colors.blue038)}
      <Button
        title="Adicionar transação"
        onClick={handleNewTransaction}
        minWidth="100%"
      />
    </Container>
  );
}
