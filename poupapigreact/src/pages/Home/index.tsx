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

  useEffect(() => {
    if (scrollRef.current) {
      const totalWidth = data.length * 145;
      const containerWidth = scrollRef.current.offsetWidth;

      setShowArrows(totalWidth > containerWidth);
    }
  }, [data]);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);

      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
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
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

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
      <FinancialControlProfile situation="ok" />
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
          <MoneyTipsContainer>
            <Image src={Home1} alt="PoupaPig" />
            <TitleTips>
              Confira dicas de economia voltadas para o seu perfil!
            </TitleTips>
          </MoneyTipsContainer>
        </Row>
      </ClientData>
      <FloatingAddButton />
    </Container>
  );
}
