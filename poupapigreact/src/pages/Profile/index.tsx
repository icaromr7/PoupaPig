import React, { useEffect, useState } from "react";

import {
  Container,
  CardFinancialControl,
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
  BenefitsContainer,
  TitleBenefit,
  NameBenefit,
  ContainerModal,
  Overlay,
  Header,
  TitleModal,
  Close,
  Body,
  Footer,
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
  getAssinaturaByUsuarioId,
  getBancoByUsuarioId,
  getBeneficioBancoById,
  getBeneficioBAssinaturaById,
  getBeneficioCartaoById,
  getCartaoByUsuarioId,
  getClasseByUsuarioId,
  getGanhosVsGastos,
  getLancamentosCompletos,
  getSaldo,
  getValorOrcado,
} from "../../services/api";
import { GenericData, TransacaoInt } from "../../interfaces";
import { formatDate, numberToCurrency } from "../../utils/bibli";
import { CategorySpending } from "../../components/CategorySpending";
import { CustomModal } from "../../components/CustomModal";

interface BenefitResponse {
  linkInfo: string;
  beneficios: string;
}

const situacaoSocial = (classe: any) => {
  if (!classe) return null; // Verifique se 'classe' está definido

  return (
    <SocialSituation>
      <Row>
        <Column>
          <TitleSocial>CLASSE SOCIAL</TitleSocial>
          <MessageSocial>{classe.descricao}</MessageSocial>
        </Column>
        <LetterSocial>{classe.nome}</LetterSocial>
      </Row>
      <Column>
        <MessageSocial style={{ fontSize: 20 }}>{classe.apelido}</MessageSocial>
        <MessageSocial>Renda média anual: {classe.rendaAnual}</MessageSocial>

        <MessageSocial style={{ fontSize: 16, marginTop: 10 }}>
          Sonhos e conquistas:
        </MessageSocial>
        {classe.sonhos &&
        Array.isArray(classe.sonhos) &&
        classe.sonhos.length > 0 ? (
          classe.sonhos.map((s: any, key: any) => (
            <MessageSocial key={key}>{s}</MessageSocial>
          ))
        ) : (
          <MessageSocial>Nenhum sonho ou conquista definido.</MessageSocial>
        )}

        <MessageSocial style={{ fontSize: 16, marginTop: 10 }}>
          Dificuldades:
        </MessageSocial>
        {classe.dificuldades &&
        Array.isArray(classe.dificuldades) &&
        classe.dificuldades.length > 0 ? (
          classe.dificuldades.map((d: any, key: any) => (
            <MessageSocial key={key}>{d}</MessageSocial>
          ))
        ) : (
          <MessageSocial>Nenhuma dificuldade definida.</MessageSocial>
        )}

        <MessageSocial style={{ fontSize: 16, marginTop: 10 }}>
          Consumo:
        </MessageSocial>
        {classe.consumo &&
        Array.isArray(classe.consumo) &&
        classe.consumo.length > 0 ? (
          classe.consumo.map((c: any, key: any) => (
            <MessageSocial key={key}>{c}</MessageSocial>
          ))
        ) : (
          <MessageSocial>Nenhum dado de consumo disponível.</MessageSocial>
        )}
      </Column>
    </SocialSituation>
  );
};

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
  const [classe, setClasse] = useState<any>({});
  const [hex, setHex] = useState<string>("");
  const [hexBackground, setHexBackground] = useState<string>("");
  const [assinaturasUser, setAssinaturasUser] = useState<GenericData[]>([]);
  const [bancosUser, setBancosUser] = useState<GenericData[]>([]);
  const [cartoesUser, setCartoesUser] = useState<GenericData[]>([]);
  const [modalBenefits, setModalBenefits] = useState<boolean>(false);
  const [benefitsContent, setBenefitsContent] = useState<React.ReactNode>(null);

  const classes = [
    {
      id: 1,
      nome: "A",
      apelido: "Elite",
      descricao: "Representa cerca de 3,1% da população brasileira.",
      rendaAnual: "R$ 240.000 a R$ 600.000",
      sonhos: [
        "Manter o status quo e a posição de liderança na sociedade",
        "Aumentar a riqueza e o patrimônio",
        "Viajar e conhecer novos lugares e culturas",
        "Ter acesso a bens e serviços de luxo",
      ],
      dificuldades: [
        "Lidar com a pressão e a responsabilidade de manter o status quo",
      ],
      consumo: [
        "Carros de luxo",
        "Propriedades de luxo",
        "Viagens internacionais de luxo",
        "Roupas e acessórios de designers",
        "Equipamentos de tecnologia de ponta",
        "Serviços de concierge e assistência pessoal de luxo",
        "Móveis e decoração de luxo",
        "Realizar projetos filantrópicos",
        "Desenvolver habilidades e conhecimentos em áreas específicas por puro enriquecimento pessoal",
        "Construir um legado",
      ],
    },
    {
      id: 2,
      nome: "B1",
      apelido: "Classe alta/Executivos",
      descricao: "Representa cerca de 5,0% da população brasileira.",
      rendaAnual: "R$ 120.000 a R$ 240.000",
      sonhos: [
        "Aumentar a renda e o patrimônio",
        "Ter um estilo de vida confortável e seguro",
        "Viajar e conhecer novos lugares e culturas",
        "Ter acesso a bens e serviços de qualidade",
      ],
      dificuldades: [
        "Lidar com a pressão e a responsabilidade do trabalho",
        "Encontrar um equilíbrio entre a vida pessoal e profissional",
        "Manter a saúde e o bem-estar em um estilo de vida agitado",
        "Lidar com a insegurança e a incerteza do mercado de trabalho",
      ],
      consumo: [
        "Carros de luxo intermediário",
        "Propriedades de luxo intermediário",
        "Viagens internacionais de luxo intermediário",
        "Roupas e acessórios de marca",
        "Equipamentos de tecnologia de ponta",
        "Serviços de concierge e assistência pessoal intermédiarios",
        "Móveis e decoração de luxo intermediário",
        "Desenvolver uma carreira de sucesso",
        "Construir uma família feliz e estável",
        "Aprender novas habilidades e conhecimentos por puro enriquecimento pessoal",
      ],
    },
    {
      id: 3,
      nome: "B2",
      apelido: "Classe média alta/Profissionais",
      descricao: "Representa cerca de 16,5% da população brasileira.",
      rendaAnual: "R$ 60.000 a R$ 120.000",
      sonhos: [
        "Ter um estilo de vida confortável e seguro",
        "Aumentar a renda e o patrimônio",
        "Viajar e conhecer novos lugares e culturas",
        "Ter acesso a bens e serviços de qualidade",
      ],
      dificuldades: [
        "Lidar com a rotina e a monotonia do trabalho",
        "Encontrar um equilíbrio entre a vida pessoal e profissional",
        "Manter a saúde e o bem-estar em um estilo de vida agitado",
        "Lidar com a insegurança e a incerteza do mercado de trabalho",
      ],
      consumo: [
        "Carros de luxo acessível",
        "Propriedades de luxo acessível",
        "Viagens nacionais de luxo ",
        "Roupas e acessórios de marca acessíveis",
        "Equipamentos de tecnologia de ponta",
        "Serviços de concierge e assistência pessoal básicos",
        "Móveis e decoração acessíveis",
        "Desenvolver uma carreira estável e segura",
        "Construir uma rede de amigos e contatos",
        "Aprender a gerenciar melhor seu tempo e dinheiro",
      ],
    },
    {
      id: 4,
      nome: "C1",
      apelido: "Classe média/Famílias Estáveis",
      descricao: "Representa cerca de 20,7% da população brasileira.",
      rendaAnual: "R$ 30.000 a R$ 60.000",
      sonhos: [
        "Ter um estilo de vida confortável e seguro",
        "Aumentar a renda e o patrimônio",
        "Viajar e conhecer novos lugares e culturas",
        "Ter acesso a bens e serviços de qualidade",
      ],
      dificuldades: [
        "Lidar com a pressão e a responsabilidade de manter a família",
        "Encontrar um equilíbrio entre a vida pessoal e profissional",
        "Manter a saúde e o bem-estar em um estilo de vida agitado",
        "Lidar com a insegurança e a incerteza do mercado de trabalho",
      ],
      consumo: [
        "Carros acessíveis",
        "Ter uma casa própria",
        "Viagens nacionais acessíveis",
        "Roupas e acessórios de marca acessíveis",
        "Equipamentos de tecnologia acessíveis",
        "Serviços de assistência pessoal básico",
        "Móveis e decoração acessíveis",
        "Desenvolver uma carreira que permita um equilíbrio entre trabalho e vida pessoal",
        "Ter acesso a serviços de saúde e educação de qualidade",
        "Lazer e entretenimento acessiveis",
        "Aprender a gerenciar melhor seu orçamento e economizar para aposentadoria",
      ],
    },
    {
      id: 5,
      nome: "C2",
      apelido: "Classe média baixa/Famílias em Desenvolvimento",
      descricao: "Representa cerca de 26,3% da população brasileira.",
      rendaAnual: "R$ 18.000 a R$ 30.000",
      sonhos: [
        "Ter um estilo de vida confortável e seguro",
        "Aumentar a renda e o patrimônio",
        "Viajar e conhecer novos lugares e culturas",
        "Ter acesso a bens e serviços de qualidade",
      ],
      dificuldades: [
        "Lidar com a pobreza e a falta de recursos",
        "Encontrar um emprego estável e bem remunerado",
        "Manter a saúde e o bem-estar em um estilo de vida difícil",
        "Lidar com a insegurança e a incerteza do futuro",
      ],
      consumo: [
        "Casa própria",
        "Carro popular",
        "Móveis e eletrodomésticos básicos",
        "Roupas e calçados básicos",
        "Alimentos variados",
        "Produtos de higiene pessoal acessíveis",
        "Equipamentos de tecnologia essenciais",
        "Serviços de saúde básica",
        "Educação básica",
        "Lazer e entretenimento simples",
      ],
    },
    {
      id: 6,
      nome: "DE",
      apelido: "Classe baixa/Famílias em Necessidade",
      descricao: "Representa cerca de 28,4% da população brasileira.",
      rendaAnual: "R$ 6.000 a R$ 18.000",
      sonhos: [
        "Ter um estilo de vida confortável e seguro",
        "Aumentar a renda e o patrimônio",
        "Viajar e conhecer novos lugares e culturas",
        "Ter acesso a bens e serviços básicos",
      ],
      dificuldades: [
        "Lidar com a pobreza e a falta de recursos",
        "Encontrar um emprego estável e bem remunerado",
        "Manter a saúde e o bem-estar em um estilo de vida difícil",
        "Lidar com a insegurança e a incerteza do futuro",
      ],
      consumo: [
        "Aluguel em dia",
        "Transporte público",
        "Móveis e eletrodomésticos básicos",
        "Roupas e calçados básicos",
        "Alimentos básicos",
        "Produtos de higiene pessoal básicos",
        "Equipamentos de tecnologia essenciais",
        "Serviços de saúde básicos",
        "Educação básica",
        "Lazer e entretenimento simples",
      ],
    },
  ];

  useEffect(() => {
    if (userCode) {
      const fetchData = async () => {
        try {
          setLoading(true);
          //resumo de lançamentos
          const lancamentos = await getLancamentosCompletos(Number(userCode));
          setLancamentos(lancamentos);
          // classe do usuário
          const classe = await getClasseByUsuarioId(Number(userCode));
          const classeEncontrada = classes.find(
            (item) => item.id === classe[0].id
          );
          setClasse(classeEncontrada);
          //status financeiro do usuário
          const devedor = await getSaldo(Number(userCode));
          setDevendo(devedor.saldo);
          const orcados = await getValorOrcado(Number(userCode));
          const lancamentosValores = await getGanhosVsGastos(Number(userCode));
          setLivreSemOrcado(lancamentosValores.ganhos - orcados);
        } catch (error: any) {
          addToast({
            message: error.message,
            type: "error",
            title: "Erro ao obter dados financeiros do usuário",
          });
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const assinatura = await getAssinaturaByUsuarioId(Number(userCode));
        setAssinaturasUser(assinatura);
        const banco = await getBancoByUsuarioId(Number(userCode));
        setBancosUser(banco);
        const cartao = await getCartaoByUsuarioId(Number(userCode));
        setCartoesUser(cartao);
      } catch (error: any) {
        addToast({
          message: error.message,
          title: "Erro ao buscar dados",
          type: "error",
        });
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userCode]);

  const fetchBenefits = async () => {
    setModalBenefits(true);
    let beneficiosCartao: BenefitResponse[] = [];
    let beneficiosBanco: BenefitResponse[] = [];
    let beneficiosAssinaturas: BenefitResponse[] = [];
    try {
      setLoading(true);
      beneficiosCartao = await Promise.all(
        cartoesUser.map(async (item) => {
          return await getBeneficioCartaoById(item.id);
        })
      );

      beneficiosBanco = await Promise.all(
        bancosUser.map(async (item) => {
          return await getBeneficioBancoById(item.id);
        })
      );
      beneficiosAssinaturas = await Promise.all(
        assinaturasUser.map(async (item) => {
          return await getBeneficioBAssinaturaById(item.id);
        })
      );

      setBenefitsContent(
        <BenefitsContainer>
          <TitleBenefit>Assinaturas</TitleBenefit>
          {beneficiosAssinaturas.map((assinatura, index) => (
            <BenefitsContainer key={index}>
              <NameBenefit>{assinatura.beneficios} - </NameBenefit>
              <a href={assinatura.linkInfo}>Acesse aqui para saber mais</a>
            </BenefitsContainer>
          ))}
          <TitleBenefit>Bancos</TitleBenefit>
          {beneficiosBanco.map((banco, index) => (
            <BenefitsContainer key={index}>
              <NameBenefit>{banco.beneficios}</NameBenefit>
              <NameBenefit>
                <a href={banco.linkInfo}>Acesse aqui</a>
              </NameBenefit>
            </BenefitsContainer>
          ))}
          <TitleBenefit>Cartões</TitleBenefit>
          {beneficiosCartao.map((cartao, index) => (
            <BenefitsContainer key={index}>
              <NameBenefit>{cartao.beneficios}</NameBenefit>
              <NameBenefit>
                <a href={cartao.linkInfo}>Acesse aqui</a>
              </NameBenefit>
            </BenefitsContainer>
          ))}
        </BenefitsContainer>
      );
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar benefícios",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <CardFinancialControl $hex={hexToRgb(hex)}>
        <RowProfile>
          <UserTitle>
            <WelcomeTitle>Olá, !</WelcomeTitle>
            <Subtitle>Acompanhe aqui a situação da sua conta</Subtitle>
          </UserTitle>
        </RowProfile>
        <FinancialControlResume $hex={hexToRgb(hexBackground)}>
          <Image src={iconSituation} alt="PoupaPig" />
          <MessageFinancialControl>{messageSituation}</MessageFinancialControl>
        </FinancialControlResume>
        {situacaoSocial(classe)}
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
            <Button
              title="Confira seus benefícios!"
              minWidth="100%"
              onClick={fetchBenefits}
            />
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
      {modalBenefits && (
        <Overlay>
          <ContainerModal>
            <Header>
              <Close onClick={() => setModalBenefits(false)} />
            </Header>
            <Body>{benefitsContent}</Body>
            <Footer>
              <Button
                title="Sair"
                backgroundColor={theme.colors.greyB8C}
                borderColor={theme.colors.grey6F7}
                onClick={() => setModalBenefits(false)}
              />
            </Footer>
          </ContainerModal>
        </Overlay>
      )}
    </Container>
  );
}
