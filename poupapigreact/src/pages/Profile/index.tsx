import React, { useEffect, useState } from "react";

import {
  Container,
  CardFinancialControl,
  ProfileImage,
  UserTitle,
  WelcomeTitle,
  Subtitle,
  FinancialControlResume,
  Image,
  MessageFinancialControl,
  SocialSituation,
  Column,
  TitleSocial,
  MessageSocial,
  LetterSocial,
  ClientData,
  Grid,
  Row,
  BenefitContainer,
  TextBenefit,
  ContainerBenefits,
  TitleBenefit,
  NameBenefit,
  Side,
  Title,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  HeaderCell,
  IconCell,
  TableCell,
  ContainerCategory,
  // Icon,
  ValueSpentLine,
  ValueSpent,
  LoadingBar,
  TotalCategory,
} from "./style";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IcecreamIcon from "@mui/icons-material/Icecream";
import Ok from "../../assets/svg/ok.svg";

import { FinancialControlProfile } from "../../components/FinancialControlProfile";
import { Button } from "../../components/Button";
import { FloatingAddButton } from "../../components/FloatingAddButton";
import { getAssinaturas, getBancos, getCartoes } from "../../services/api";
import { GenericData } from "../../interfaces";
import { useAuth } from "../../context/AuthContext";

const cards = [
  "Visa",
  "American Express",
  "Mastercard",
  "Elo",
  "Hipercard",
  "Diners Club",
];
const banks = ["Caixa", "Bradesco", "Banco do Brasil"];
const signatures = ["Prime", "Kindle Unlimited", "Netflix", "MercadoLivre"];
const data = [
  {
    date: "01/01/2024",
    value: "R$1.000,00",
    name: "Compra da Vitórya",
    arrow: "down",
  },
];

export function Profile() {
  const { addToast } = useAuth();
  const totalRows = 11;
  const filledRows = data.length;
  const emptyRows = totalRows - filledRows;

  const [cartoes, setCartoes] = useState<GenericData[]>([]);
  const [assinaturas, setAssinaturas] = useState<GenericData[]>([]);
  const [bancos, setBancos] = useState<GenericData[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const assinaturas = await getAssinaturas();
        const bancos = await getBancos();
        const cartoes = await getCartoes();
        console.log("data:", bancos);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    fetchItems();
  }, []);

  const fetchCartoes = async () => {
    console.log("oi");
    try {
      throw new Error("Erro forçado para teste");
      const data = await getCartoes();
      console.log("data:", data);
      setCartoes(data);
    } catch (error: any) {
      console.log("erro");
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const dataBenefits = (
    title: string,
    data: string[],
    titleButton: string,
    onClick: () => void
  ) => {
    const chunkedData = [];
    for (let i = 0; i < data.length; i += 3) {
      chunkedData.push(data.slice(i, i + 3));
    }
    return (
      <ContainerBenefits onClick={onClick}>
        <TitleBenefit>{title}</TitleBenefit>
        {chunkedData.map((group, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            {group.map((x, idx) => (
              <React.Fragment key={idx}>
                <NameBenefit>{x}</NameBenefit>
                {/* Adiciona "|" entre os itens, mas não após o último */}
                {idx < group.length - 1 && (
                  <span style={{ margin: "0 8px" }}>|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
        <Button title={titleButton} />
      </ContainerBenefits>
    );
  };

  const CategorySpending = (
    <ContainerCategory>
      <IcecreamIcon style={{ height: 20 }} />
      <ValueSpentLine>
        <ValueSpent>R$000,00</ValueSpent>
        <LoadingBar></LoadingBar>
      </ValueSpentLine>
      <TotalCategory>R$0.000,00</TotalCategory>
    </ContainerCategory>
  );
  return (
    <Container>
      <CardFinancialControl>
        <Row>
          <ProfileImage></ProfileImage>
          <UserTitle>
            <WelcomeTitle>Olá, Fulano de tal!</WelcomeTitle>
            <Subtitle>Acompanhe aqui a situação da sua conta</Subtitle>
          </UserTitle>
        </Row>
        <FinancialControlResume>
          <Image src={Ok} alt="PoupaPig"></Image>
          <MessageFinancialControl>
            Parabéns! Suas finanças estão sob controle.
          </MessageFinancialControl>
        </FinancialControlResume>
        <SocialSituation>
          <Row>
            <Column>
              <TitleSocial>CLASSE SOCIAL</TitleSocial>
              <MessageSocial>Você está entre 10000 brasileiros.</MessageSocial>
            </Column>
            <LetterSocial>A</LetterSocial>
          </Row>
        </SocialSituation>
      </CardFinancialControl>
      <ClientData>
        <Grid style={{ gap: 50 }}>
          {dataBenefits(
            "Suas bandeiras de cartão",
            cards,
            "Adicionar cartão",
            fetchCartoes
          )}
          {/* {dataBenefits("Suas contas bancárias", banks, "Adicionar banco")}
          {dataBenefits("Suas assinaturas", signatures, "Adicionar assinatura")} */}
          <BenefitContainer>
            <TextBenefit>
              Sabia que seu cartão, banco ou assinatura recorrente pode te dar
              benefícios?
            </TextBenefit>
            <Button title="Confira seus benefícios!" />
          </BenefitContainer>
        </Grid>
        <Row>
          <Side>
            <Title>SEU EXTRATO</Title>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow even={true}>
                    <HeaderCell>Data</HeaderCell>
                    <HeaderCell>Valor</HeaderCell>
                    <HeaderCell>Nome compra</HeaderCell>
                    <IconCell>
                      <ArrowDownwardIcon />
                      <ArrowUpwardIcon />
                    </IconCell>
                  </TableRow>
                </TableHeader>
                <tbody>
                  {data.map((row, index) => (
                    <TableRow key={index} even={index % 2 === 0}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <IconCell>
                        {row.arrow === "up" ? (
                          <ArrowUpwardIcon style={{ color: "#F63A3A" }} />
                        ) : (
                          <ArrowDownwardIcon style={{ color: "#0FB920" }} />
                        )}
                      </IconCell>
                    </TableRow>
                  ))}
                  {Array.from({ length: emptyRows }).map((_, index) => (
                    <TableRow
                      key={`empty-${index}`}
                      even={(filledRows + index) % 2 === 0}
                    >
                      <TableCell />
                      <TableCell />
                      <TableCell />
                      <IconCell />
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Side>
          <Side>
            <Title>SUAS CATEGORIAS</Title>
            {CategorySpending}
          </Side>
        </Row>
      </ClientData>
      <FloatingAddButton />
    </Container>
  );
}
