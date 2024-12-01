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
  RowProfile,
} from "./style";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IcecreamIcon from "@mui/icons-material/Icecream";
import Ok from "../../assets/svg/ok.svg";

import { Button } from "../../components/Button";
import { FloatingAddButton } from "../../components/FloatingAddButton";
import { DataBenefits } from "../../components/DataBenefits";
import { useAuth } from "../../context/AuthContext";
import { getLancamentosCompletos } from "../../services/api";
import { TransacaoInt } from "../../interfaces";
import { formatDate, numberToCurrency } from "../../utils/bibli";

export function Profile() {
  const { addToast, setLoading, userCode } = useAuth();
  const totalRows = 11;
  const [lancamentos, setLancamentos] = useState<TransacaoInt[]>([]);

  useEffect(() => {
    if (userCode) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const lancamentos = await getLancamentosCompletos(Number(userCode));
          setLancamentos(lancamentos);
          console.log("lancamentos", lancamentos);
        } catch (error: any) {
          addToast({ message: error.message, type: "error" });
          console.error("Erro ao obter lancamentos", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [userCode]);
  // const filledRows = data.length;
  // const emptyRows = totalRows - filledRows;

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       setLoading(true);
  //       const assinaturas = await getAssinaturas();
  //       const bancos = await getBancos();
  //       const cartoes = await getCartoes();
  //       console.log("data:", assinaturas, bancos, cartoes);
  //     } catch (error) {
  //       console.error("Erro ao buscar itens:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchItems();
  // }, []);

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
        <RowProfile>
          <UserTitle>
            <WelcomeTitle>Olá, Fulano de tal!</WelcomeTitle>
            <Subtitle>Acompanhe aqui a situação da sua conta</Subtitle>
          </UserTitle>
        </RowProfile>
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
          <DataBenefits
            title="Suas bandeiras de cartão"
            id="cartao-id-escolha"
            titleButton="Adicionar cartão"
            type="cartao"
          />
          <DataBenefits
            title="Suas contas bancárias"
            id="banco-id-escolha"
            titleButton="Adicionar banco"
            type="banco"
          />
          <DataBenefits
            title="Suas assinaturas"
            id="assinatura-id-escolha"
            titleButton="Adicionar assinatura"
            type="assinatura"
          />
          <BenefitContainer>
            <TextBenefit>
              Sabia que seu cartão, banco ou assinatura recorrente pode te dar
              benefícios?
            </TextBenefit>
            <Button title="Confira seus benefícios!" minWidth="100%" />
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
                  {lancamentos.map((row, index) => (
                    <TableRow key={index} even={index % 2 === 0}>
                      <TableCell>
                        {formatDate(row.data_transacao || "")}
                      </TableCell>
                      <TableCell>{numberToCurrency(row.valor)}</TableCell>
                      <TableCell>{row.nome}</TableCell>
                      <IconCell>
                        {row.tipo_id === 2 ? (
                          <ArrowUpwardIcon style={{ color: "#F63A3A" }} />
                        ) : (
                          <ArrowDownwardIcon style={{ color: "#0FB920" }} />
                        )}
                      </IconCell>
                    </TableRow>
                  ))}
                  {/* {Array.from({ length: emptyRows }).map((_, index) => (
                    <TableRow
                      key={`empty-${index}`}
                      even={(filledRows + index) % 2 === 0}
                    >
                      <TableCell />
                      <TableCell />
                      <TableCell />
                      <IconCell />
                    </TableRow>
                  ))} */}
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
