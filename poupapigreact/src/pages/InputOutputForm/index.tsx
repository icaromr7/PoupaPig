import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//style, icons e assets
import {
  Container,
  Title,
  Content,
  Row,
  FirstColumn,
  Column,
  ButtonCard,
  RoundIcon,
  Image,
  TitleButtonCard,
  TitleSentiment,
  ButtonSentiment,
  Icon,
  NameSentiment,
  ButtonsDiv,
  ErrorDiv,
} from "./style";
import theme from "../../styles/theme";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Ok from "../../assets/svg/ok.svg";
import Attention from "../../assets/svg/atencao.svg";
import Emergency from "../../assets/svg/emergencia.svg";
import InputOutputForm1 from "../../assets/svg/inputoutputform1.svg";
import InputOutputForm2 from "../../assets/svg/inputoutputform2.svg";
import InputOutputForm3 from "../../assets/svg/inputoutputform3.svg";
import InputOutputForm4 from "../../assets/svg/inputoutputform4.svg";

//importações internas
import Input from "../../components/Input";
import CustomSelectDate from "../../components/CustomSelectDate";
import CustomSelect from "../../components/CustomSelect";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import ToolTipCustom from "../../components/TooltipCustom";
import {
  CategoriaInt,
  GenericData,
  InvestimentoMetaInt,
  TransacaoInt,
} from "../../interfaces";
import { useAuth } from "../../context/AuthContext";
import {
  getBancoById,
  getBancos,
  getCategoriaById,
  getCategoriasUsuario,
  getMetaInvestimento,
  getMetaInvestimentoById,
  getPeriodicidadeTransacao,
  getPeriodicidadeTransacaoById,
  getRecorrencia,
  getRecorrenciaById,
  getSentimentoTransacao,
  getSentimentoTransacaoById,
  getSituacaoTransacao,
  getSituacaoTransacaoById,
  getTipoPagamento,
  getTipoPagamentoById,
  getTipoTransacao,
  getTipoTransacaoById,
  postTransacao,
  putTransacao,
} from "../../services/api";

const schema = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u00FF\s]+$/, "Apenas letras são permitidas"),
  valor: yup.number().required("Campo obrigatório"),
  categoria_id: yup.number().required("Campo obrigatório"),
  banco_id: yup.number().nullable().notRequired(),
  meta_investimento_id: yup.number().nullable().notRequired(),
  tipo_pagamento_id: yup.number().required("Campo obrigatório"),
  recorrencia_id: yup.number().nullable().notRequired(),
  data_transacao: yup.string().nullable().notRequired(),
  quantidade_parcela: yup.number().nullable().notRequired(),
  tipo_id: yup.number().required("Escolha uma das opções"),
  situacao_id: yup.number().required("Escolha uma das opções"),
  periodicidade_id: yup.number().required("Escolha uma das opções"),
  sentimento_id: yup.number().nullable().notRequired(),
  observacao: yup.string().nullable().notRequired(),
});

export function InputOutputForm() {
  const { addToast, setLoading, userCode } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const location = useLocation();
  const transactionData: TransacaoInt = location.state?.transactionData;
  const navigate = useNavigate();
  const [payment, setPayment] = useState<string>("");
  const [type, setType] = useState<"in" | "out" | undefined>(undefined);
  const [situation, setSituation] = useState<
    "certain" | "possibility" | undefined
  >(undefined);
  const [repeat, setRepeat] = useState<"repeat" | "noRepeat" | undefined>(
    undefined
  );
  const [sentiment, setSentiment] = useState<
    "happy" | "anxious" | "sad" | undefined
  >(undefined);
  const [isCartaoCredito, setIsCartaoCredito] = useState(false);

  // para formulário de post - pega dados do bd
  const [categorias, setCategorias] = useState<GenericData[]>([]);
  const [bancos, setBancos] = useState<GenericData[]>([]);
  const [tiposPagamentos, setTiposPagamentos] = useState<GenericData[]>([]);
  const [recorrencias, setRecorrencias] = useState<GenericData[]>([]);
  const [metasInvestimentos, setMetasInvestimentos] = useState<GenericData[]>(
    []
  );
  //para formulário de put - pega dados conforme o salvo no bd
  const [categoriasEdit, setCategoriasEdit] = useState<GenericData>();
  const [bancoEdit, setBancoEdit] = useState<GenericData>();
  const [tipoPagamentoEdit, setTipoPagamentoEdit] = useState<GenericData>();
  const [recorrenciaEdit, setRecorrenciaEdit] = useState<GenericData>();
  const [investimentoEdit, setInvestimentoEdit] = useState<GenericData>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCancelForm = () => {
    navigate("/new-transaction");
  };

  const handleInputOutputList = async (data: any) => {
    const params = new URLSearchParams(location.search);
    const isEditing = params.get("editing") === "true";
    const combinedData = {
      ...data,
      usuario_id: Number(userCode),
      ...(transactionData && { id: transactionData.id }),
    };

    if (isEditing) {
      try {
        setLoading(true);
        await putTransacao(combinedData);
        navigate("/input-output-list");
      } catch (error: any) {
        console.error("Erro da API:", error.response.data);
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao enviar dados",
        });
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        await postTransacao(combinedData);
        navigate("/input-output-list");
      } catch (error: any) {
        console.error("Erro da API:", error.response.data);
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao enviar dados",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSelect = (option: string) => {};

  const handleSelectPayment = (option: string) => {
    setPayment(option);
  };

  const handleTypeSelected = (type: "in" | "out") => {
    setType(type);
    setValue("tipo_id", type === "in" ? 1 : 2);
  };

  const handleSituationSelected = (type: "certain" | "possibility") => {
    setSituation(type);
    setValue("situacao_id", type === "certain" ? 1 : 2);
  };

  const handleRecurrencySelected = (type: "repeat" | "noRepeat") => {
    setRepeat(type);
    setValue("periodicidade_id", type === "repeat" ? 2 : 1);
  };

  const handleSentimentSelected = (sentiment: "happy" | "anxious" | "sad") => {
    setSentiment(sentiment);
    setValue(
      "sentimento_id",
      sentiment === "happy" ? 1 : sentiment === "anxious" ? 2 : 3
    );
  };

  const handleEditForm = () => {
    setIsEditing(true);
  };

  const handleTipoPagamentoChange = (option: GenericData) => {
    setIsCartaoCredito(option.id === 2);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const categoria = await fetchCategorias();
        setCategorias(categoria);
        const banco = await fetchBancos();
        setBancos(banco);
        const tipoPag = await fetchTipoPagamento();
        setTiposPagamentos(tipoPag);
        const recorrencia = await fetchRecorrencia();
        setRecorrencias(recorrencia);
        const investimento = await fetchInvestimentos();
        setMetasInvestimentos(investimento);
        const dataaaaa = await getPeriodicidadeTransacao();
        const tipo = await getTipoTransacao();
        const situ = await getSituacaoTransacao();
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [userCode]);

  useEffect(() => {
    const fetchEditItems = async () => {
      if (transactionData) {
        try {
          setLoading(true);
          const categoria = await fetchCategoriasById(
            transactionData.categoria_id
          );
          setCategoriasEdit(categoria);
          if (transactionData.banco_id) {
            const banco = await fetchBancosById(transactionData.banco_id);
            setBancoEdit(banco);
          }
          const tipoPag = await fetchTipoPagamentoById(
            transactionData.tipo_pagamento_id
          );
          setTipoPagamentoEdit(tipoPag);
          if (transactionData.recorrencia_id) {
            const recorrencia = await fetchRecorrenciaById(
              transactionData.recorrencia_id
            );
            setRecorrenciaEdit(recorrencia);
          }
          if (transactionData.meta_investimento_id) {
            const investimento = await fetchInvestimentosById(
              transactionData.meta_investimento_id
            );
            setInvestimentoEdit(investimento);
          }
          const tipoEdit = await fetchTipoTransacaoById(
            transactionData.tipo_id
          );
          const situacaoEdit = await fetchsituacaoTransacaoById(
            transactionData.situacao_id
          );
          const periodicidadeEdit = await fetchperiodicidadeTransacaoById(
            transactionData.periodicidade_id
          );
          if (transactionData.sentimento_id) {
            const sentimentoEdit = await fetchSentimentoTransacaoById(
              transactionData.sentimento_id
            );
          }
        } catch (error) {
          console.error("Erro ao completar dados:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEditItems();
  }, [transactionData]);

  const fetchCategorias = async () => {
    if (userCode) {
      try {
        setLoading(true);
        const categorias = await getCategoriasUsuario(Number(userCode));
        return categorias.map(({ id, nome }: CategoriaInt) => ({
          id,
          nome,
        }));
      } catch (error: any) {
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao obter categorias",
        });
        console.error("Erro ao obter as categorias", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchCategoriasById = async (id: number) => {
    if (userCode) {
      try {
        setLoading(true);
        const categoria = await getCategoriaById(id);
        return {
          id: categoria.id,
          nome: categoria.nome,
        };
      } catch (error: any) {
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao obter categorias",
        });
        console.error("Erro ao obter as categorias", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchBancos = async () => {
    try {
      const data = await getBancos();
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchBancosById = async (id: number) => {
    if (userCode) {
      try {
        const data = await getBancoById(id);
        return data;
      } catch (error: any) {
        addToast({
          message: error.message,
          title: "Erro ao buscar itens",
          type: "error",
        });
        console.error("Erro ao buscar itens:", error);
      }
    }
  };

  const fetchTipoPagamento = async () => {
    try {
      const data = await getTipoPagamento();
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchTipoPagamentoById = async (id: number) => {
    try {
      const data = await getTipoPagamentoById(id);
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchRecorrencia = async () => {
    try {
      const data = await getRecorrencia();
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchRecorrenciaById = async (id: number) => {
    try {
      const data = await getRecorrenciaById(id);
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchInvestimentos = async () => {
    if (userCode) {
      try {
        setLoading(true);
        const metaInvestimento = await getMetaInvestimento();
        return metaInvestimento.map(({ id, nome }: InvestimentoMetaInt) => ({
          id,
          nome,
        }));
      } catch (error: any) {
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao obter as categorias",
        });
        console.error("Erro ao obter as categorias", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchInvestimentosById = async (id: number) => {
    if (userCode) {
      try {
        setLoading(true);
        const metaInvestimento = await getMetaInvestimentoById(id);
        return {
          id: metaInvestimento.id,
          nome: metaInvestimento.nome,
        };
      } catch (error: any) {
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao obter as categorias",
        });
        console.error("Erro ao obter as categorias ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchTipoTransacaoById = async (id: number) => {
    try {
      const data = await getTipoTransacaoById(id);
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchsituacaoTransacaoById = async (id: number) => {
    try {
      const data = await getSituacaoTransacaoById(id);
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchperiodicidadeTransacaoById = async (id: number) => {
    try {
      const data = await getPeriodicidadeTransacaoById(id);
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  const fetchSentimentoTransacaoById = async (id: number) => {
    try {
      const data = await getSentimentoTransacaoById(id);
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    }
  };

  return (
    <Container>
      <Title>Lançamentos na conta</Title>
      <Content>
        <Row>
          <FirstColumn>
            <Input
              name="nome"
              placeholder="Nome"
              error={errors.nome?.message}
              register={register}
              fixedValue={transactionData && transactionData.nome}
              isEditing={isEditing}
            />
            <Input
              name="valor"
              placeholder="Valor"
              error={errors.valor?.message}
              register={register}
              number={true}
              fixedValue={transactionData && transactionData.valor}
              isEditing={isEditing}
            />
            <CustomSelect
              name="categoria_id"
              placeholder="Categoria"
              data={categorias}
              onSelect={handleSelect}
              error={errors.categoria_id?.message}
              register={register}
              setValue={setValue}
              fixedValue={transactionData && categoriasEdit}
              isEditing={isEditing}
            />
            <CustomSelect
              name="banco_id"
              placeholder="Banco"
              data={bancos}
              onSelect={handleSelect}
              error={errors.banco_id?.message}
              register={register}
              setValue={setValue}
              fixedValue={transactionData && bancoEdit}
              isEditing={isEditing}
            />
            <CustomSelect
              name="tipo_pagamento_id"
              placeholder="Forma de pagamento"
              data={tiposPagamentos}
              error={errors.tipo_pagamento_id?.message}
              register={register}
              setValue={setValue}
              fixedValue={transactionData && tipoPagamentoEdit}
              isEditing={isEditing}
              onSelect={handleTipoPagamentoChange}
            />
            {isCartaoCredito &&
              (transactionData?.quantidade_parcela !== null ||
                transactionData?.quantidade_parcela !== undefined) && (
                <Input
                  name="quantidade_parcela"
                  placeholder="Quantidade de parcelas"
                  error={errors.quantidade_parcela?.message}
                  register={register}
                  number={true}
                  fixedValue={
                    transactionData &&
                    String(transactionData?.quantidade_parcela)
                  }
                  isEditing={isEditing}
                />
              )}
            {repeat === "repeat" &&
              (transactionData?.recorrencia_id !== null ||
                transactionData?.recorrencia_id !== undefined) && (
                <CustomSelect
                  name="recorrencia_id"
                  placeholder="Recorrência"
                  data={recorrencias}
                  onSelect={handleSelect}
                  error={errors.recorrencia_id?.message}
                  register={register}
                  setValue={setValue}
                  fixedValue={
                    transactionData
                      ? recorrenciaEdit || { id: 0, nome: "Recorrência" }
                      : undefined
                  }
                  isEditing={isEditing}
                />
              )}
          </FirstColumn>
          <Column>
            <Row>
              <ButtonCard
                style={{
                  color: theme.colors.redF63,
                  backgroundColor: theme.colors.redFFD,
                }}
                onClick={() => {
                  if (isEditing) {
                    handleTypeSelected("out"); // Atualiza o estado ao clicar
                  } else if (transactionData?.tipo_id === undefined) {
                    handleTypeSelected("out");
                  }
                }}
                $selected={
                  type === "out" ||
                  (transactionData?.tipo_id === 2 && !isEditing)
                }
                $blocked={!isEditing}
              >
                <RoundIcon>
                  <ArrowUpwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
                <TitleButtonCard>
                  Estou cadastrando uma{" "}
                  <span style={{ fontWeight: 700, color: theme.colors.redF63 }}>
                    saída
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              <ButtonCard
                style={{
                  color: theme.colors.green0FB,
                  backgroundColor: theme.colors.greenDCF,
                }}
                onClick={() => {
                  if (isEditing) {
                    handleTypeSelected("in"); // Atualiza o estado ao clicar
                  } else if (transactionData?.tipo_id === undefined) {
                    handleTypeSelected("in");
                  }
                }}
                $selected={
                  type === "in" ||
                  (transactionData?.tipo_id === 21 && !isEditing)
                }
                $blocked={!isEditing}
              >
                <RoundIcon>
                  <ArrowDownwardIcon style={{ fontSize: 50 }} />
                </RoundIcon>
                <TitleButtonCard>
                  Estou cadastrando uma{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.green0FB }}
                  >
                    entrada
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              {errors.tipo_id?.message && (
                <ErrorDiv>
                  <ErrorOutlineIcon
                    style={{
                      cursor: "pointer",
                      color: theme.colors.redF63,
                      height: 20,
                    }}
                    className="error-circle"
                    data-tooltip-id={`tooltip-error-input-tipo_id`}
                  />
                  <ToolTipCustom
                    title={errors.tipo_id?.message}
                    id={`tooltip-error-input-tipo_id`}
                  />
                </ErrorDiv>
              )}
            </Row>
            <Row>
              <ButtonCard
                style={{
                  color: theme.colors.blue002,
                  backgroundColor: theme.colors.whiteF2F,
                }}
                onClick={() => {
                  if (isEditing) {
                    handleSituationSelected("certain");
                  } else if (transactionData?.situacao_id === undefined) {
                    handleSituationSelected("certain");
                  }
                }}
                $selected={
                  situation === "certain" ||
                  (transactionData?.situacao_id === 1 && !isEditing)
                }
                $blocked={!isEditing}
              >
                <Image
                  src={InputOutputForm1}
                  alt="PoupaPig"
                  style={{ marginTop: 15 }}
                />
                <TitleButtonCard>
                  Este lançamento é uma{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.green0FB }}
                  >
                    certeza
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              <ButtonCard
                style={{
                  color: theme.colors.blue002,
                  backgroundColor: theme.colors.whiteF2F,
                }}
                onClick={() => {
                  if (isEditing) {
                    handleSituationSelected("possibility");
                  } else if (transactionData?.situacao_id === undefined) {
                    handleSituationSelected("possibility");
                  }
                }}
                $selected={
                  situation === "possibility" ||
                  (transactionData?.situacao_id === 2 && !isEditing)
                }
                $blocked={!isEditing}
              >
                <Image src={InputOutputForm2} alt="PoupaPig" />
                <TitleButtonCard>
                  Este lançamento é apenas um{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.yellowDAD }}
                  >
                    talvez
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              {errors.situacao_id?.message && (
                <ErrorDiv>
                  <ErrorOutlineIcon
                    style={{
                      cursor: "pointer",
                      color: theme.colors.redF63,
                      height: 20,
                    }}
                    className="error-circle"
                    data-tooltip-id={`tooltip-error-input-situacao_id`}
                  />
                  <ToolTipCustom
                    title={errors.situacao_id?.message}
                    id={`tooltip-error-input-situacao_id`}
                  />
                </ErrorDiv>
              )}
            </Row>
            <Row>
              <ButtonCard
                style={{
                  color: theme.colors.blue038,
                  backgroundColor: theme.colors.whiteF2F,
                }}
                onClick={() => {
                  if (isEditing) {
                    handleRecurrencySelected("repeat");
                  } else if (transactionData?.periodicidade_id === undefined) {
                    handleRecurrencySelected("repeat");
                  }
                }}
                $selected={
                  repeat === "repeat" ||
                  (transactionData?.periodicidade_id === 2 && !isEditing)
                }
                $blocked={!isEditing}
              >
                <Image src={InputOutputForm3} alt="PoupaPig" />
                <TitleButtonCard>
                  Este lançamento é{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.blue038 }}
                  >
                    fixo
                  </span>{" "}
                  e{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.colors.blue038 }}
                  >
                    recorrente
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              <ButtonCard
                style={{
                  color: theme.colors.redF63,
                  backgroundColor: theme.colors.whiteF2F,
                }}
                onClick={() => {
                  if (isEditing) {
                    handleRecurrencySelected("noRepeat");
                  } else if (transactionData?.periodicidade_id === undefined) {
                    handleRecurrencySelected("noRepeat");
                  }
                }}
                $selected={
                  repeat === "noRepeat" ||
                  (transactionData?.periodicidade_id === 1 && !isEditing)
                }
                $blocked={!isEditing}
              >
                <Image src={InputOutputForm4} alt="PoupaPig" />
                <TitleButtonCard>
                  Este lançamento é{" "}
                  <span style={{ fontWeight: 700, color: theme.colors.redF63 }}>
                    único
                  </span>{" "}
                  e{" "}
                  <span style={{ fontWeight: 700, color: theme.colors.redF63 }}>
                    variável
                  </span>
                </TitleButtonCard>
              </ButtonCard>
              {errors.periodicidade_id?.message && (
                <ErrorDiv>
                  <ErrorOutlineIcon
                    style={{
                      cursor: "pointer",
                      color: theme.colors.redF63,
                      height: 20,
                    }}
                    className="error-circle"
                    data-tooltip-id={`tooltip-error-input-periodicidade_id`}
                  />
                  <ToolTipCustom
                    title={errors.periodicidade_id?.message}
                    id={`tooltip-error-input-periodicidade_id`}
                  />
                </ErrorDiv>
              )}
            </Row>
            <Row>
              <CustomSelectDate
                name="data_transacao"
                placeholder="Data da transação"
                error={errors.data_transacao?.message}
                setValue={setValue}
                fixedValue={
                  transactionData
                    ? String(transactionData?.data_transacao) ||
                      "Data da transação"
                    : undefined
                }
                isEditing={isEditing}
              />
              <CustomSelect
                name="meta_investimento_id"
                placeholder="Relacionar com investimento/meta:"
                data={metasInvestimentos}
                onSelect={handleSelect}
                error={errors.meta_investimento_id?.message}
                register={register}
                setValue={setValue}
                fixedValue={
                  transactionData
                    ? investimentoEdit || {
                        id: 0,
                        nome: "Relacionar com investimento/meta:",
                      }
                    : undefined
                }
                isEditing={isEditing}
              />
            </Row>
          </Column>
        </Row>
        <Row>
          <TextField
            name="observacao"
            placeholder="Observações ou anotações extras"
            error={errors.observacao?.message}
            register={register}
            fixedValue={transactionData && transactionData?.observacao}
            isEditing={isEditing}
          />
        </Row>
        <Row>
          <TitleSentiment>Como eu me senti com essa compra</TitleSentiment>
        </Row>
        <Row style={{ justifyContent: "space-evenly" }}>
          <ButtonSentiment
            style={{ color: theme.colors.green0FB }}
            onClick={() => {
              if (transactionData?.sentimento_id === undefined && !isEditing) {
                handleSentimentSelected("happy");
              }
            }}
            $selected={
              sentiment === "happy" || transactionData?.sentimento_id === 1
            }
            $blocked={!isEditing}
          >
            <Icon src={Ok} alt="PoupaPig" />
            <NameSentiment>{`Feliz, animada(o)`}</NameSentiment>
          </ButtonSentiment>
          <ButtonSentiment
            style={{ color: theme.colors.yellowDAD }}
            onClick={() => {
              if (transactionData?.sentimento_id === undefined && !isEditing) {
                handleSentimentSelected("anxious");
              }
            }}
            $selected={
              sentiment === "anxious" || transactionData?.sentimento_id === 2
            }
            $blocked={!isEditing}
          >
            <Icon src={Attention} alt="PoupaPig" />
            <NameSentiment>{`Tensa(o), ansiosa(o)`}</NameSentiment>
          </ButtonSentiment>
          <ButtonSentiment
            style={{ color: theme.colors.redF63 }}
            onClick={() => {
              if (transactionData?.sentimento_id === undefined && !isEditing) {
                handleSentimentSelected("sad");
              }
            }}
            $selected={
              sentiment === "sad" || transactionData?.sentimento_id === 3
            }
            $blocked={!isEditing}
          >
            <Icon src={Emergency} alt="PoupaPig" />
            <NameSentiment>{`Triste, miserável`}</NameSentiment>
          </ButtonSentiment>
        </Row>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={handleCancelForm}
          />
          <Button
            title={transactionData && !isEditing ? "Editar" : "Salvar"}
            onClick={
              transactionData && !isEditing
                ? handleEditForm
                : handleSubmit(handleInputOutputList)
            }
          />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
