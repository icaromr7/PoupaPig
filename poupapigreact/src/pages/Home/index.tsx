import React, { useEffect, useRef, useState } from "react";

//style, assets e icons
import {
  Container,
  CardFinancialControl,
  ClientData,
  Row,
  TitleContainer,
  ContainerElement,
  Icon,
  MainData,
  Value,
  DollarSign,
  ValueNumber,
  Title,
  Date,
  ScrollContainer,
  ScrollContent,
  ArrowLeft,
  ArrowRight,
  MoneyTipsContainer,
  Image,
  TitleTips,
  NoDataMessage,
} from "./style";
import theme from "../../styles/theme";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Home1 from "../../assets/svg/home1.svg";

//importações internas
import { formatDate, numberToCurrency } from "../../utils/bibli";
import { TransactionData } from "../../interfaces";
import { FloatingAddButton } from "../../components/FloatingAddButton";
import { FinancialControlProfile } from "../../components/FinancialControlProfile";
import { ModalEconomyTips } from "../../components/ModalEconomyTips";
import { useAuth } from "../../context/AuthContext";
import {
  getGanhosVsGastos,
  getInvestimentos,
  getLancamentos,
  getOrcamentos,
  getRetornoInvestimentos,
  getSaldo,
} from "../../services/api";

interface DataResumo {
  nome: string;
  valor: number;
  data: string;
  tipo?: number;
}

const ScrollMenu = ({
  data,
  type,
}: {
  data: DataResumo[];
  type: "lancamento" | "orcamento" | "investimento";
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const updateShowArrows = () => {
    if (scrollRef.current) {
      const totalWidth = data.length * 165;
      const containerWidth = scrollRef.current.offsetWidth;
      setShowArrows(totalWidth > containerWidth);
      checkScrollPosition();
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    updateShowArrows();

    window.addEventListener("resize", updateShowArrows);
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      window.removeEventListener("resize", updateShowArrows);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [data]);
  return (
    <ScrollContainer>
      {data.length === 0 ? (
        <NoDataMessage>
          Usuário ainda não possui dados cadastrados.
        </NoDataMessage>
      ) : (
        <>
          {showArrows && showLeftArrow && (
            <ArrowLeft onClick={scrollLeft}>
              <ArrowBackIosNewIcon
                style={{ color: theme.colors.blue002, fontSize: "50px" }}
              />
            </ArrowLeft>
          )}
          <ScrollContent ref={scrollRef}>
            {data.map((item, index) => (
              <ContainerElement
                key={index}
                $type={type}
                $tipoTran={item.tipo || 0}
              >
                <Icon>
                  {type === "lancamento" && item.tipo === 1 && (
                    <ArrowDownwardIcon />
                  )}
                  {type === "lancamento" && item.tipo === 2 && (
                    <ArrowUpwardIcon />
                  )}
                  {type === "orcamento" && <AccountBalanceWalletIcon />}
                  {type === "investimento" && <MonetizationOnIcon />}
                </Icon>
                <MainData>
                  <Value>
                    <DollarSign>R$</DollarSign>
                    <ValueNumber>{numberToCurrency(item.valor)}</ValueNumber>
                  </Value>
                  <Title>{item.nome}</Title>
                </MainData>
                <Date>{formatDate(item.data)}</Date>
              </ContainerElement>
            ))}
          </ScrollContent>
          {showArrows && showRightArrow && (
            <ArrowRight onClick={scrollRight}>
              <ArrowForwardIosIcon
                style={{ color: theme.colors.blue002, fontSize: "50px" }}
              />
            </ArrowRight>
          )}
        </>
      )}
    </ScrollContainer>
  );
};

export function Home() {
  const { addToast, setLoading, userCode, login } = useAuth();
  const [inOut, setInOut] = useState<TransactionData[]>([]);
  const [budget, setBudget] = useState<TransactionData[]>([]);
  const [investment, setInvestment] = useState<TransactionData[]>([]);
  const [showModalTips, setShowModalTips] = useState<boolean>(false);
  const [todosLancamentos, setTodosLancamentos] = useState<DataResumo[]>([]);
  const [todosOrcamentos, setTodosOrcamentos] = useState<DataResumo[]>([]);
  const [todosInvestimentos, setTodosInvestimentos] = useState<DataResumo[]>(
    []
  );

  useEffect(() => {
    const fetchUserData = async () => {
      if (userCode) {
        try {
          setLoading(true);
          //valores listados
          const total_lancamentos = await getLancamentos(Number(userCode));
          setTodosLancamentos(total_lancamentos);
          const total_orcamentos = await getOrcamentos(Number(userCode));
          setTodosOrcamentos(total_orcamentos);
          const total_investimentos = await getInvestimentos(Number(userCode));
          setTodosInvestimentos(total_investimentos);
        } catch (error: any) {
          addToast({
            message: error.message,
            type: "error",
            title: "Erro ao obter dados financeiros do usuário",
          });
          console.error("Erro ao obter dados financeiros do usuário", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUserData();
  }, [userCode]);

  return (
    <Container>
      <CardFinancialControl>
        <FinancialControlProfile />
      </CardFinancialControl>
      <ClientData>
        <Row>
          <TitleContainer>Lançamentos</TitleContainer>
          <ScrollMenu data={todosLancamentos} type="lancamento" />
        </Row>
        <Row>
          <TitleContainer>Orçamentos</TitleContainer>
          <ScrollMenu data={todosOrcamentos} type="orcamento" />
        </Row>
        <Row>
          <TitleContainer>Investimentos</TitleContainer>
          <ScrollMenu data={todosInvestimentos} type="investimento" />
        </Row>
        <Row>
          <MoneyTipsContainer onClick={() => setShowModalTips(true)}>
            <Image src={Home1} alt="PoupaPig" />
            <TitleTips>Confira as dicas de economia do PoupaPig!</TitleTips>
          </MoneyTipsContainer>
        </Row>
      </ClientData>
      <FloatingAddButton />
      {showModalTips && (
        <ModalEconomyTips onClose={() => setShowModalTips(false)} />
      )}
    </Container>
  );
}
