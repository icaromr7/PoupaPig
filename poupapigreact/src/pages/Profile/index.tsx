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
  Tabela,
  TableRow,
  HeaderCell,
  IconCell,
  TableCell,
  RowProfile,
} from "./style";
import theme from "../../styles/theme";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Ok from "../../assets/svg/ok.svg";
import Attention from "../../assets/svg/atencao.svg";
import Emergency from "../../assets/svg/emergencia.svg";

import { Button } from "../../components/Button";
import { FloatingAddButton } from "../../components/FloatingAddButton";
import { DataBenefits } from "../../components/DataBenefits";
import { useAuth } from "../../context/AuthContext";
import {
  getGanhosVsGastos,
  getLancamentosCompletos,
  getSaldo,
  getUsuarioClasse,
  getValorOrcado,
} from "../../services/api";
import { TransacaoInt } from "../../interfaces";
import { formatDate, numberToCurrency } from "../../utils/bibli";
import { CategorySpending } from "../../components/CategorySpending";

export function Profile() {
  const { addToast, setLoading, userCode } = useAuth();
  const totalRows = 11;
  const [lancamentos, setLancamentos] = useState<TransacaoInt[]>([]);
  const [devendo, setDevendo] = useState<number>(0);
  const [livreSemOrcado, setLivreSemOrcado] = useState<number>(0);

  const [messageSituation, setMessageSituation] = useState<string>("");
  const [iconSituation, setIconSituation] = useState<string>("");
  const [situation, setSituation] = useState<
    "ok" | "attention" | "emergency"
  >();
  const [hex, setHex] = useState<string>("");
  const [hexBackground, setHexBackground] = useState<string>("");

  useEffect(() => {
    if (userCode) {
      const fetchData = async () => {
        try {
          setLoading(true);
          //resumo de lançamentos
          const lancamentos = await getLancamentosCompletos(Number(userCode));
          setLancamentos(lancamentos);
          // classe do usuário
          // const classe = await getUsuarioClasse(Number(userCode));
          //status financeiro do usuário
          const devedor = await getSaldo(Number(userCode));
          setDevendo(devedor.saldo);
          const orcados = await getValorOrcado(Number(userCode));
          const lancamentosValores = await getGanhosVsGastos(Number(userCode));
          setLivreSemOrcado(lancamentosValores.ganhos - orcados);
        } catch (error: any) {
          addToast({ message: error.message, type: "error" });
          console.error("Erro ao obter dados financeiros", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [userCode]);

  //valores do resumo

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

  const filledRows = lancamentos.length;
  const emptyRows = totalRows - filledRows;

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  };

  return (
    <Container>
      <CardFinancialControl $hex={hexToRgb(hex)}>
        <RowProfile>
          <UserTitle>
            <WelcomeTitle>Olá, Fulano de tal!</WelcomeTitle>
            <Subtitle>Acompanhe aqui a situação da sua conta</Subtitle>
          </UserTitle>
        </RowProfile>
        <FinancialControlResume $hex={hexToRgb(hexBackground)}>
          <Image src={iconSituation} alt="PoupaPig" />
          <MessageFinancialControl>{messageSituation}</MessageFinancialControl>
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
                <Tabela>
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
                </Tabela>
              </Table>
            </TableContainer>
          </Side>
          <Side>
            <Title>SUAS CATEGORIAS</Title>
            <CategorySpending />
          </Side>
        </Row>
      </ClientData>
      <FloatingAddButton />
    </Container>
  );
}
