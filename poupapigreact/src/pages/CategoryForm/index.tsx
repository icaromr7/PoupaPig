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

const schema = yup.object().shape({
  nome_id: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u00FF\s]+$/, "Apenas letras são permitidas"),
  valor_minimo: yup
    .string()
    .matches(/^[0-9]*$/, "Apenas números são permitidos")
    .nullable()
    .notRequired(),
  valor_maximo: yup
    .string()
    .matches(/^[0-9]*$/, "Apenas números são permitidos")
    .nullable()
    .notRequired(),
  icone: yup.string().nullable(),
});

export function CategoryForm() {
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

  return (
    <Container>
      <Title>Lançamentos na conta</Title>
      <Content>
        <InputDiv>
          <Input
            name="nome_id"
            placeholder="Nome categoria"
            error={errors.nome_id?.message}
            register={register}
            fixedValue={categoryData && categoryData.nome_id}
            isEditing={isEditing}
          />
          <Input
            name="valor_minimo"
            placeholder="Valor minimo"
            error={errors.valor_minimo?.message}
            register={register}
            number={true}
            fixedValue={categoryData && (categoryData.valor_minimo ?? " ")}
            isEditing={isEditing}
          />
          <Input
            name="valor_maximo"
            placeholder="Valor máximo"
            error={errors.valor_maximo?.message}
            register={register}
            number={true}
            fixedValue={categoryData && (categoryData.valor_maximo ?? " ")}
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
                : handleSubmit(handleCategoryList)
            }
          />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
