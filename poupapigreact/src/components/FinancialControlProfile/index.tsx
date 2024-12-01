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
import { useAuth } from "../../context/AuthContext";
import {
  getGanhosVsGastos,
  getRetornoInvestimentos,
  getSaldo,
  getValorOrcado,
} from "../../services/api";

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
  const { addToast, setLoading, userCode, login } = useAuth();
  const navigate = useNavigate();
  const [messageSituation, setMessageSituation] = useState<string>("");
  const [iconSituation, setIconSituation] = useState<string>("");
  const [situation, setSituation] = useState<
    "ok" | "attention" | "emergency"
  >();
  const [hex, setHex] = useState<string>("");
  const [hexBackground, setHexBackground] = useState<string>("");

  //valores do resumo
  const [livres, setLivres] = useState<number>(0);
  const [gastos, setGastos] = useState<number>(0);
  const [devendo, setDevendo] = useState<number>(0);
  const [orcado, setOrcado] = useState<number>(0);
  const [livreSemOrcado, setLivreSemOrcado] = useState<number>(0);
  const [investido, setInvestido] = useState<number>(0);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userCode) {
        try {
          //valores de resumo
          const lancamentos = await getGanhosVsGastos(Number(userCode));
          setLivres(lancamentos.ganhos);
          setGastos(lancamentos.gastos);
          const devedor = await getSaldo(Number(userCode));
          setDevendo(devedor.saldo);
          const orcados = await getValorOrcado(Number(userCode));
          setOrcado(orcados);
          const investimento = await getRetornoInvestimentos(Number(userCode));
          console.log("dados:", lancamentos.ganhos, orcados);
          setLivreSemOrcado(lancamentos.ganhos - orcados);
          setInvestido(investimento);
        } catch (error: any) {
          addToast({ message: error.message, type: "error" });
          console.error("Erro ao obter dados financeiros do usuário", error);
        }
      }
    };
    fetchUserData();
  }, [userCode]);

  const handleNewTransaction = () => {
    navigate("/new-transaction");
  };

  useEffect(() => {
    const calculo = livreSemOrcado - devendo;
    console.log("calculo", calculo);

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
  }, [livreSemOrcado, devendo]);

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
        {valueSign("livres", livres, hex)}
        <SituationMessage>
          <Image src={iconSituation} alt="PoupaPig" />
          <Message>{messageSituation}</Message>
        </SituationMessage>
      </ResumeContainer>
      {valueSign("gasto", gastos, theme.colors.redF63)}
      {valueSign("devendo", devendo, theme.colors.yellowDAD)}
      {valueSign("orçado", orcado, theme.colors.orangeEE7)}
      {valueSign(
        "livre sem valor dos orçamentos",
        livreSemOrcado,
        theme.colors.greenAEC
      )}
      {valueSign("investido", investido, theme.colors.blue038)}
      <Button
        title="Adicionar transação"
        onClick={handleNewTransaction}
        minWidth="100%"
      />
    </Container>
  );
}
