import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Title,
  Content,
  InputDiv,
  IconDiv,
  TitleIconDiv,
  ButtonsDiv,
} from "./style";
import theme from "../../styles/theme";
import Input from "../../components/Input";

import { Button } from "../../components/Button";
import { IconPicker } from "../../utils/bibli";
import { CategoriaInt } from "../../interfaces";
import { useAuth } from "../../context/AuthContext";
import { postCategoria, putCategoria } from "../../services/api";

const schema = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u00FF\s]+$/, "Apenas letras são permitidas"),
  valor_min: yup
    .number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .default(0) // Retorna 0 se o valor for vazio ou nulo
    .notRequired(),
  valor_max: yup
    .number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .default(0) // Retorna 0 se o valor for vazio ou nulo
    .notRequired(),
  icone: yup
    .string()
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .default(null),
});

export function CategoryForm() {
  const { addToast, setLoading, userCode } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const location = useLocation();
  const categoryData: CategoriaInt = location.state?.categoryData;
  const navigate = useNavigate();

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

  const handleCategoryList = (data: any) => {
    console.log("data", data);
    navigate("/category-list");
  };

  const handleIconSelect = (iconName: string) => {
    console.log("Ícone selecionado:", iconName);
    setValue("icone", iconName);
  };

  const handleEditForm = () => {
    setIsEditing(true);
  };

  const handleFormCategory = async (data: any) => {
    const params = new URLSearchParams(location.search);
    const isEditing = params.get("editing") === "true";
    const combinedData = {
      ...data,
      usuario_id: Number(userCode),
      ...(categoryData && { id: categoryData.id }),
    };
    console.log("Dados combinados:", combinedData);

    if (isEditing) {
      console.log("entrei no put");
      try {
        setLoading(true);
        await putCategoria(combinedData);
        navigate("/category-list");
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
        await postCategoria(combinedData);
        navigate("/category-list");
      } catch (error: any) {
        console.error("Erro da API:", error.response.data);
        addToast({ message: error.message, type: "error" });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Title>Lançamentos na conta</Title>
      <Content>
        <InputDiv>
          <Input
            name="nome"
            placeholder="Nome categoria"
            error={errors.nome?.message}
            register={register}
            fixedValue={categoryData && categoryData.nome}
            isEditing={isEditing}
          />
          <Input
            name="valor_min"
            placeholder="Valor minimo"
            error={errors.valor_min?.message}
            register={register}
            number={true}
            fixedValue={categoryData && (categoryData.valor_min ?? " ")}
            isEditing={isEditing}
          />
          <Input
            name="valor_max"
            placeholder="Valor máximo"
            error={errors.valor_max?.message}
            register={register}
            number={true}
            fixedValue={categoryData && (categoryData.valor_max ?? " ")}
            isEditing={isEditing}
          />
        </InputDiv>
        {(!categoryData || isEditing) && (
          <IconDiv>
            <TitleIconDiv>Escolha um icon para a categoria:</TitleIconDiv>
            <IconPicker onSelect={handleIconSelect} />
          </IconDiv>
        )}
        <ButtonsDiv>
          <Button
            title="Cancelar"
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={handleCancelForm}
          />
          {/* {icon} */}
          <Button
            title={categoryData && !isEditing ? "Editar" : "Salvar"}
            onClick={
              categoryData && !isEditing
                ? handleEditForm
                : handleSubmit(handleFormCategory)
            }
          />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
