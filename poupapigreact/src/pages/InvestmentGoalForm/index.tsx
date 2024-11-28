import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//style, icons e assets
import {
  Container,
  Title,
  FormRegister,
  Line,
  FormRegisterRight,
  ButtonsDiv,
  FirtsColumn,
  ErrorDiv,
} from "./style";
import theme from "../../styles/theme";

//importações internas
import Input from "../../components/Input";
import CustomSelect from "../../components/CustomSelect";
import CustomSelectDate from "../../components/CustomSelectDate";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import { useLocation, useNavigate } from "react-router-dom";
import { GenericData, InvestimentoMetaInt } from "../../interfaces";
import ToolTipCustom from "../../components/TooltipCustom";
import {
  getBancoById,
  getBancos,
  getNomeTipoInvestimento,
  getNomeTipoInvestimentoById,
  getNomeTipoObjetivo,
  getNomeTipoObjetivoById,
  getRecorrencia,
  getRecorrenciaById,
  postMetaInvestimento,
  putMetaInvestimento,
} from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const schema = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u00FF\s]+$/, "Apenas letras são permitidas"),
  valor_desejado: yup
    .number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .default(0)
    .notRequired(),
  banco_id: yup.number().required("Campo obrigatório"),
  recorrencia_pretendida_id: yup.number().required("Campo obrigatório"),
  tipo_objetivo_id: yup.number().required("Campo obrigatório"),
  tipo_investimento_id: yup.number().nullable().notRequired(),
  data_resgate: yup.string().nullable().notRequired(),
  porcentagem_rendimento: yup.number().nullable().notRequired(),
  tipo_taxa_juros_id: yup.number().nullable().notRequired(),
  observacao: yup.string().nullable().notRequired(),
});

export function InvestmentGoalForm() {
  const { addToast, setLoading, userCode } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const location = useLocation();
  const investmentGoalData: InvestimentoMetaInt =
    location.state?.investmentGoalData;
  const navigate = useNavigate();
  const [investment, setInvestment] = useState<boolean>(
    false || investmentGoalData?.tipo_objetivo_id === 2 ? true : false
  );
  const [recorrencias, setRecorrencias] = useState<GenericData[]>([]);
  const [bancos, setBancos] = useState<GenericData[]>([]);
  const [tiposInvestimentos, setTiposInvestimentos] = useState<GenericData[]>(
    []
  );
  const [tipoObjetivo, setTipoObjetivo] = useState<GenericData[]>([]);
  const [bancoEdit, setBancoEdit] = useState<GenericData>();
  const [recorrenciaEdit, setRecorrenciaEdit] = useState<GenericData>();
  const [tipoInvestimentoEdit, setTipoInvestimentoEdit] =
    useState<GenericData>();
  const [tipoTaxasJurosEdit, setTipoTaxasJurosEdit] = useState<GenericData>();
  const [tipoObjetivoEdit, setTipoObjetivoEdit] = useState<GenericData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInvestmentGoalList = async (data: any) => {
    const params = new URLSearchParams(location.search);
    const isEditing = params.get("editing") === "true";
    const combinedData = {
      ...data,
      usuario_id: Number(userCode),
      ...(investmentGoalData && { id: investmentGoalData.id }),
    };

    if (isEditing) {
      try {
        setLoading(true);
        await putMetaInvestimento(combinedData);
        navigate("/investment-goal-list");
      } catch (error: any) {
        console.error("Erro da API:", error.response.data);
        addToast({ message: error.message, type: "error" });
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        await postMetaInvestimento(combinedData);
        navigate("/investment-goal-list");
      } catch (error: any) {
        console.error("Erro da API:", error.response.data);
        addToast({ message: error.message, type: "error" });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCancelForm = () => {
    navigate("/new-transaction");
  };

  const handleBackForm = () => {
    navigate("/investment-goal-list");
  };

  const handleEditForm = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const banco = await fetchBancos();
        setBancos(banco);
        const recorrencia = await fetchRecorrencia();
        setRecorrencias(recorrencia);
        const tipoInvestimento = await fetchTipoInvestimento();
        setTiposInvestimentos(tipoInvestimento);
        const tipoObj = await getNomeTipoObjetivo();
        setTipoObjetivo(tipoObj);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fecthEditItems = async () => {
      if (investmentGoalData) {
        try {
          setLoading(true);
          const banco = await fetchBancosById(investmentGoalData.banco_id);
          setBancoEdit(banco);
          const recorrencia = await fetchRecorrenciaById(
            investmentGoalData.recorrencia_pretendida_id
          );
          setRecorrenciaEdit(recorrencia);
          if (investmentGoalData.tipo_investimento_id) {
            const tipoInvestimento = await fetchTipoInvestimentoById(
              investmentGoalData.tipo_investimento_id
            );
            setTipoInvestimentoEdit(tipoInvestimento);
          }
          if (investmentGoalData.tipo_taxa_juros_id) {
            const tipoTaxa = await fetchRecorrenciaById(
              investmentGoalData.tipo_taxa_juros_id
            );
            setTipoTaxasJurosEdit(tipoTaxa);
          }
          const tipoObj = await fetchTipoObjetivoById(
            investmentGoalData.tipo_objetivo_id
          );
          setTipoObjetivoEdit(tipoObj);
        } catch (error) {
          console.error("Erro ao completar dados:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fecthEditItems();
  }, [investmentGoalData]);

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

  const fetchTipoInvestimento = async () => {
    try {
      const data = await getNomeTipoInvestimento();
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

  const fetchTipoInvestimentoById = async (id: number) => {
    try {
      const data = await getNomeTipoInvestimentoById(id);
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

  const fetchTipoObjetivoById = async (id: number) => {
    try {
      const data = await getNomeTipoObjetivoById(id);
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
      <Title>Investimentos ou metas</Title>
      <FirtsColumn>
        <FormRegister>
          <Input
            name="nome"
            placeholder="Nome"
            error={errors.nome?.message}
            register={register}
            fixedValue={investmentGoalData && investmentGoalData.nome}
            isEditing={isEditing}
          />
          <Input
            name="valor_desejado"
            placeholder="Valor desejado"
            error={errors.valor_desejado?.message}
            register={register}
            number={true}
            fixedValue={investmentGoalData && investmentGoalData.valor_desejado}
            isEditing={isEditing}
          />
          <CustomSelect
            name="banco_id"
            placeholder="Banco"
            data={bancos}
            error={errors.banco_id?.message}
            register={register}
            setValue={setValue}
            fixedValue={investmentGoalData && bancoEdit}
            isEditing={isEditing}
          />
          <CustomSelect
            name="recorrencia_pretendida_id"
            placeholder="Recorrência pretendida"
            data={recorrencias}
            error={errors.recorrencia_pretendida_id?.message}
            register={register}
            setValue={setValue}
            fixedValue={investmentGoalData && recorrenciaEdit}
            isEditing={isEditing}
          />
          <Line style={{ alignSelf: "center", gap: 100 }}>
            <Checkbox
              name="tipo_objetivo_id"
              data={tipoObjetivo}
              fixedValue={tipoObjetivoEdit}
              isEditing={isEditing}
              setValue={setValue}
              setInvestment={setInvestment}
            />
            {errors.tipo_objetivo_id?.message && (
              <ErrorDiv>
                <ErrorOutlineIcon
                  style={{
                    cursor: "pointer",
                    color: theme.colors.redF63,
                    height: 20,
                  }}
                  className="error-circle"
                  data-tooltip-id={`tooltip-error-input-tipo_objetivo_id`}
                />
                <ToolTipCustom
                  title={errors.tipo_objetivo_id?.message}
                  id={`tooltip-error-input-tipo_objetivo_id`}
                />
              </ErrorDiv>
            )}
          </Line>

          {investment && (
            <>
              <CustomSelect
                name="tipo_investimento_id"
                placeholder="Tipo de investimento"
                data={tiposInvestimentos}
                error={errors.tipo_investimento_id?.message}
                register={register}
                setValue={setValue}
                fixedValue={investmentGoalData && tipoInvestimentoEdit}
                isEditing={isEditing}
              />
              <CustomSelectDate
                name="data_resgate"
                placeholder="Data permitida para retirada"
                error={errors.data_resgate?.message}
                setValue={setValue}
                fixedValue={
                  investmentGoalData && String(investmentGoalData.data_resgate)
                }
                isEditing={isEditing}
              />
              <Line>
                <Input
                  name="porcentagem_rendimento"
                  placeholder="Rendimento em porcentagem"
                  error={errors.porcentagem_rendimento?.message}
                  register={register}
                  number={true}
                  fixedValue={
                    investmentGoalData &&
                    investmentGoalData.porcentagem_rendimento
                  }
                  isEditing={isEditing}
                />
                <CustomSelect
                  name="tipo_taxa_juros_id"
                  placeholder="Tipo de taxa"
                  data={recorrencias}
                  error={errors.tipo_taxa_juros_id?.message}
                  register={register}
                  setValue={setValue}
                  fixedValue={investmentGoalData && tipoTaxasJurosEdit}
                  isEditing={isEditing}
                />
              </Line>
            </>
          )}
        </FormRegister>
        <FormRegisterRight>
          <TextField
            name="observacao"
            placeholder="Observações ou anotações extras"
            error={errors.observacao?.message}
            register={register}
            fixedValue={investmentGoalData && investmentGoalData.observacao}
            isEditing={isEditing}
          />
          <ButtonsDiv>
            <Button
              title="Cancelar"
              backgroundColor={theme.colors.greyB8C}
              borderColor={theme.colors.grey6F7}
              onClick={
                investmentGoalData && !isEditing
                  ? handleBackForm
                  : handleCancelForm
              }
            />
            <Button
              title={investmentGoalData && !isEditing ? "Editar" : "Salvar"}
              onClick={
                investmentGoalData && !isEditing
                  ? handleEditForm
                  : handleSubmit(handleInvestmentGoalList)
              }
            />
          </ButtonsDiv>
        </FormRegisterRight>
      </FirtsColumn>
    </Container>
  );
}
