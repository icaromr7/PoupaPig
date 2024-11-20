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

import { FinancialControlProfile } from "../../components/FinancialControlProfile";
import { Button } from "../../components/Button";
import { FloatingAddButton } from "../../components/FloatingAddButton";
import { getAssinaturas, getBancos, getCartoes } from "../../services/api";
import { GenericData } from "../../interfaces";
import { useAuth } from "../../context/AuthContext";
import { CustomModal } from "../../components/CustomModal";
import CustomSelect from "../../components/CustomSelect";
import { DataBenefits } from "../../components/DataBenefits";

export function Profile() {
  const { addToast } = useAuth();
  const totalRows = 11;
  // const filledRows = data.length;
  // const emptyRows = totalRows - filledRows;

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const assinaturas = await getAssinaturas();
  //       const bancos = await getBancos();
  //       const cartoes = await getCartoes();
  //       console.log("data:", bancos);
  //     } catch (error) {
  //       console.error("Erro ao buscar itens:", error);
  //     }
  //   };

  //   fetchItems();
  // }, []);

  const fetchCartoes = async () => {
    console.log("oi");
    try {
      const data = await getCartoes();
      return data;
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

  const fetchAssinaturas = async () => {
    console.log("oi");
    try {
      const data = await getCartoes();
      return data;
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

  const fetchBancos = async () => {
    console.log("oi");
    try {
      const data = await getCartoes();
      return data;
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

  // const dataBenefits = (
  //   title: string,
  //   data: string[],
  //   titleButton: string,
  //   onClick: () => void,
  //   id: string
  // ) => {

  //   return (
  //     <ContainerBenefits onClick={onClick}>
  //       <TitleBenefit>{title}</TitleBenefit>
  //       {chunkedData.map((group, index) => (
  //         <div key={index} style={{ display: "flex", alignItems: "center" }}>
  //           {group.map((x, idx) => (
  //             <React.Fragment key={idx}>
  //               <NameBenefit>{x}</NameBenefit>
  //               {/* Adiciona "|" entre os itens, mas não após o último */}
  //               {idx < group.length - 1 && (
  //                 <span style={{ margin: "0 8px" }}>|</span>
  //               )}
  //             </React.Fragment>
  //           ))}
  //         </div>
  //       ))}
  //       <ButtonDiv>
  //         <Button title={titleButton} minWidth="100%" />
  //       </ButtonDiv>
  //       <CustomModal />
  //     </ContainerBenefits>
  //   );
  // };

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
          <ProfileImage></ProfileImage>
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
            onClick={fetchCartoes}
          />
          <DataBenefits
            title="Suas contas bancárias"
            id="banco-id-escolha"
            titleButton="Adicionar banco"
            onClick={fetchBancos}
          />
          <DataBenefits
            title="Suas assinaturas"
            id="assinatura-id-escolha"
            titleButton="Adicionar assinatura"
            onClick={fetchAssinaturas}
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
                  {/* {data.map((row, index) => (
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
                  ))} */}
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
