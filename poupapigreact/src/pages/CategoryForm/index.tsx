import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const {
    register: register,
    handleSubmit: handleSubmit,
    formState: { errors: errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCancelForm = () => {
    navigate("/new-transaction");
  };

  const handleInputOutputList = (data: any) => {
    console.log("data", data);
    navigate("/category-list");
  };

  const handleIconSelect = (iconName: string) => {
    console.log("Ícone selecionado:", iconName);
    setValue("icone", iconName);
  };

  // const icon = showIconPicked("Icecream");

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
          />
          <Input
            name="valor_minimo"
            placeholder="Valor minimo"
            error={errors.valor_minimo?.message}
            register={register}
            number={true}
          />
          <Input
            name="valor_maximo"
            placeholder="Valor máximo"
            error={errors.valor_maximo?.message}
            register={register}
            number={true}
          />
        </InputDiv>
        <IconDiv>
          <TitleIconDiv>Escolha um icon para a categoria:</TitleIconDiv>
          <IconPicker onSelect={handleIconSelect} />
        </IconDiv>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={handleCancelForm}
          />
          {/* {icon} */}
          <Button
            title="Salvar"
            onClick={handleSubmit(handleInputOutputList)}
          />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
