import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  CardFinancialControl,
  ClientData,
  Row,
  TitleContainer,
  ContainerElement,
  Icon,
  Value,
  DollarSign,
  ValueNumber,
  Title,
  Date,
  ScrollContainer,
  ArrowLeft,
  ArrowRight,
} from "./style";
import { numberToCurrency } from "../../utils/bibli";
import { TransactionData } from "../../interfaces";

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

  return (
    <ScrollContainer>
      <ArrowLeft onClick={scrollLeft}>{"<"}</ArrowLeft>
      <div className="scroll-content" ref={scrollRef}>
        {data.map((item, index) => (
          <ContainerElement key={index} $type={item.type}>
            <Icon></Icon>
            <Value>
              <DollarSign>R$</DollarSign>
              <ValueNumber>{numberToCurrency(item.value)}</ValueNumber>
            </Value>
            <Title>{item.name}</Title>
            <Date>{item.date}</Date>
          </ContainerElement>
        ))}
      </div>
      <ArrowRight onClick={scrollRight}>{">"}</ArrowRight>
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
      <CardFinancialControl></CardFinancialControl>
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
      </ClientData>
    </Container>
  );
}
