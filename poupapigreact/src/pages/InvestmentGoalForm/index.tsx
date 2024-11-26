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
  getBancos,
  getNomeTipoInvestimento,
  getRecorrencia,
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
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9]*$/, "Apenas números são permitidos"),
  data_resgate: yup.string().nullable().notRequired(),
  tipo_objetivo_id: yup.string().required("Campo obrigatório"),
  tipo_investimento_id: yup.string().nullable().notRequired(),
  banco_id: yup.string().required("Campo obrigatório"),
  recorrencia_pretendida_id: yup.string().required("Campo obrigatório"),
  porcentagem_rendimento: yup.string().nullable().notRequired(),
  tipo_taxa_juros_id: yup.string().nullable().notRequired(),
  observacao: yup.string().nullable().notRequired(),
});

export function InvestmentGoalForm() {
  const { addToast, setLoading, userCode } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const location = useLocation();
  const investmentGoalData: InvestimentoMetaInt =
    location.state?.investmentGoalData;
  const navigate = useNavigate();
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [investment, setInvestment] = useState<boolean>(false);
  const [goal, setGoal] = useState<boolean>(false);
  const data = ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5"];
  // const [textValue, setTextValue] = useState<string>("");
  const [recorrencias, setRecorrencias] = useState<GenericData[]>([]);
  const [bancos, setBancos] = useState<GenericData[]>([]);
  const [tiposInvestimentos, setTiposInvestimentos] = useState<GenericData[]>(
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const handleTextChange = (value: string) => {
  //   setTextValue(value);
  // };

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  //   console.log("Data selecionada:", date);
  // };

  const handleInvestment = (checked: boolean) => {
    if (checked) {
      setInvestment(true);
      setGoal(false);
    } else {
      setInvestment(false);
    }
  };

  const handleGoal = (checked: boolean) => {
    if (checked) {
      setGoal(true);
      setInvestment(false);
    } else {
      setGoal(false);
    }
  };

  const handleInvestmentGoalList = async () => {
    const params = new URLSearchParams(location.search);
    const isEditing = params.get("editing") === "true";
    const combinedData = {
      ...data,
      usuario_id: Number(userCode),
      ...(investmentGoalData && { id: investmentGoalData.id }),
    };
    console.log("Dados combinados:", combinedData);

    if (isEditing) {
      console.log("entrei no put");
      try {
        setLoading(true);
        await putMetaInvestimento(combinedData);
      } catch (error: any) {
        console.error("Erro da API:", error.response.data);
        addToast({ message: error.message, type: "error" });
      } finally {
        setLoading(false);
      }
    } else {
      console.log("entrei no post");
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

  const handleSelect = (option: string) => {
    console.log("option", option);
  };

  const handleEditForm = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const banco = await fetchBancos();
        setBancos(banco);
        const recorrencia = await fetchRecorrencia();
        setRecorrencias(recorrencia);
        const tipoInvestimento = await fetchTipoInvestimento();
        setTiposInvestimentos(tipoInvestimento);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    fetchItems();
  }, []);

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
            onSelect={handleSelect}
            error={errors.banco_id?.message}
            register={register}
            setValue={setValue}
            fixedValue={
              investmentGoalData && String(investmentGoalData.banco_id)
            }
            isEditing={isEditing}
          />
          <CustomSelect
            name="recorrencia_pretendida_id"
            placeholder="Recorrência pretendida"
            data={recorrencias}
            onSelect={handleSelect}
            error={errors.recorrencia_pretendida_id?.message}
            register={register}
            setValue={setValue}
            fixedValue={
              investmentGoalData &&
              String(investmentGoalData.recorrencia_pretendida_id)
            }
            isEditing={isEditing}
          />
          {/* <CustomSelectDate
            placeholder="Data limite"
            onDateChange={handleDateChange}
          /> */}
          <Line style={{ alignSelf: "center", gap: 100 }}>
            <Checkbox
              label="Investimento"
              name="investment"
              checked={investment}
              onChange={handleInvestment}
              register={register}
              setValue={setValue}
            />
            <Checkbox
              label="Meta"
              name="goal"
              checked={goal}
              onChange={handleGoal}
              register={register}
              setValue={setValue}
            />
            {errors.tipo_investimento_id?.message && (
              <ErrorDiv>
                <ErrorOutlineIcon
                  style={{
                    cursor: "pointer",
                    color: theme.colors.redF63,
                    height: 20,
                  }}
                  className="error-circle"
                  data-tooltip-id={`tooltip-error-input-tipo_investimento_id`}
                />
                <ToolTipCustom
                  title={errors.tipo_investimento_id?.message}
                  id={`tooltip-error-input-tipo_investimento_id`}
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
                onSelect={handleSelect}
                error={errors.tipo_investimento_id?.message}
                register={register}
                setValue={setValue}
                fixedValue={
                  investmentGoalData &&
                  String(investmentGoalData.tipo_investimento_id)
                }
                isEditing={isEditing}
              />
              <CustomSelectDate
                name="data_resgate"
                placeholder="Data permitida para retirada"
                error={errors.data_resgate?.message}
                register={register}
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
                  data={data}
                  onSelect={handleSelect}
                  error={errors.tipo_taxa_juros_id?.message}
                  register={register}
                  setValue={setValue}
                  fixedValue={
                    investmentGoalData &&
                    String(investmentGoalData.tipo_taxa_juros_id)
                  }
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
              onClick={handleCancelForm}
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
