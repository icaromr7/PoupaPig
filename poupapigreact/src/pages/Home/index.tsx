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
import { numberToCurrency } from "../../utils/bibli";
import { TransactionData } from "../../interfaces";
import { FloatingAddButton } from "../../components/FloatingAddButton";
import { FinancialControlProfile } from "../../components/FinancialControlProfile";
import { ModalEconomyTips } from "../../components/ModalEconomyTips";
import { useAuth } from "../../context/AuthContext";
import {
  getGanhosVsGastos,
  getRetornoInvestimentos,
  getSaldo,
} from "../../services/api";

const dataExemplo: TransactionData[] = [
  {
    value: 180,
    name: "Nome da compra",
    date: "09/10/2024",
    type: "in",
  },
  {
    value: 5952.36,
    name: "Nome da compra",
    date: "08/10/2024",
    type: "in",
  },
  {
    value: 54.9,
    name: "Nome da compra",
    date: "07/10/2024",
    type: "out",
  },
  {
    value: 50,
    name: "Nome da compra",
    date: "06/10/2024",
    type: "in",
  },
  {
    value: 1800,
    name: "Nome da compra",
    date: "09/10/2024",
    type: "out",
  },
  {
    value: 595.27,
    name: "Nome da compra",
    date: "08/10/2024",
    type: "out",
  },
  {
    value: 100,
    name: "Nome da compra",
    date: "07/10/2024",
    type: "out",
  },
  {
    value: 49.99,
    name: "Nome da compra",
    date: "06/10/2024",
    type: "out",
  },

  {
    value: 200,
    name: "Nome do orçamento",
    date: "06/11/2024",
    type: "budget",
  },
  {
    value: 100,
    name: "Nome do orçamento",
    date: "29/10/2024",
    type: "budget",
  },
  {
    value: 500,
    name: "Nome do orçamento",
    date: "01/12/2024",
    type: "budget",
  },

  {
    value: 1000,
    name: "Nome do investimento",
    date: "09/09/2024",
    type: "investment",
  },
  {
    value: 3000,
    name: "Nome do investimento",
    date: "08/07/2024",
    type: "investment",
  },
];

const ScrollMenu = ({ data }: { data: TransactionData[] }) => {
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
      {showArrows && showLeftArrow && (
        <ArrowLeft onClick={scrollLeft}>
          <ArrowBackIosNewIcon
            style={{ color: theme.colors.blue002, fontSize: "50px" }}
          />
        </ArrowLeft>
      )}
      <ScrollContent ref={scrollRef}>
        {data.map((item, index) => (
          <ContainerElement key={index} $type={item.type}>
            <Icon>
              {item.type === "in" && <ArrowDownwardIcon />}
              {item.type === "out" && <ArrowUpwardIcon />}
              {item.type === "budget" && <AccountBalanceWalletIcon />}
              {item.type === "investment" && <MonetizationOnIcon />}
            </Icon>
            <MainData>
              <Value>
                <DollarSign>R$</DollarSign>
                <ValueNumber>{numberToCurrency(item.value)}</ValueNumber>
              </Value>
              <Title>{item.name}</Title>
            </MainData>
            <Date>{item.date}</Date>
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
    </ScrollContainer>
  );
};

export function Home() {
  const [inOut, setInOut] = useState<TransactionData[]>([]);
  const [budget, setBudget] = useState<TransactionData[]>([]);
  const [investment, setInvestment] = useState<TransactionData[]>([]);
  const [showModalTips, setShowModalTips] = useState<boolean>(false);

  useEffect(() => {
    // Separar os dados por tipo
    const inOutData = dataExemplo.filter(
      (item) => item.type === "in" || item.type === "out"
    );
    const budgetData = dataExemplo.filter((item) => item.type === "budget");
    const investmentData = dataExemplo.filter(
      (item) => item.type === "investment"
    );

    setInOut(inOutData);
    setBudget(budgetData);
    setInvestment(investmentData);
  }, []);

  return (
    <Container>
      <CardFinancialControl>
        <FinancialControlProfile />
      </CardFinancialControl>
      <ClientData>
        <Row>
          <TitleContainer>Lançamentos</TitleContainer>
          <ScrollMenu data={inOut} />
        </Row>
        <Row>
          <TitleContainer>Orçamentos</TitleContainer>
          <ScrollMenu data={budget} />
        </Row>
        <Row>
          <TitleContainer>Investimentos</TitleContainer>
          <ScrollMenu data={investment} />
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
