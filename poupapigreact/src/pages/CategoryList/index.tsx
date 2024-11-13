import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//style, icons e assets
import {
  Container,
  MainColumn,
  InfoColumn,
  Image,
  Information,
  TitleInformation,
  TextInformation,
  ContainerItem,
  Symbol,
  Column,
  ButtonsDiv,
  IconPoupaPig,
} from "./style";
import theme from "../../styles/theme";
import InputOutput1 from "../../assets/svg/inputoutputlist1.svg";
import IconePig from "../../assets/svg/iconepig.svg";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { CustomModal } from "../../components/CustomModal";
import { CategoriaInt } from "../../interfaces";
import { showIconPicked } from "../../utils/bibli";

// Lista de categorias (exemplo)
const dataCategory: CategoriaInt[] = [
  {
    id: 1,
    nome_id: "Ifood",
    icone: "LunchDiningIcon",
    valor_minimo: 0,
    valor_maximo: 1000,
  },
  {
    id: 2,
    nome_id: "Uber",
    valor_minimo: 100,
    valor_maximo: 5000,
  },
  {
    id: 3,
    nome_id: "Make",
    icone: "CardTravelIcon",
  },
  {
    id: 4,
    nome_id: "Cabelo",
    icone: "Face3Icon",
    valor_minimo: 0,
    valor_maximo: 200,
  },
  {
    id: 5,
    nome_id: "Pet",
    icone: "PetsIcon",
    valor_minimo: 200,
  },
];

export function CategoryList() {
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const handleEditData = (data: CategoriaInt) => {
    navigate("/category-form", { state: { categoryData: data } });
  };

  const handleDeleteModal = () => {
    setModalDelete(!modalDelete);
  };

  const handleDeleteData = () => {
    console.log("deletei");
    setModalDelete(false);
  };

  const handleCategoryForm = () => {
    navigate("/category-form");
  };

  const itemCategory = (data: CategoriaInt) => {
    return (
      <ContainerItem key={data.id}>
        <Symbol>
          {data.icone ? (
            showIconPicked(data.icone)
          ) : (
            <IconPoupaPig src={IconePig} alt="Icon" />
          )}
        </Symbol>{" "}
        {/* Exibe o ícone, se disponível */}
        <Input
          name={data.nome_id}
          placeholder={data.nome_id}
          fixedValue={data.nome_id}
        />
        <Button
          title="Editar"
          backgroundColor={theme.colors.yellowF9F}
          borderColor={theme.colors.yellowDAD}
          onClick={() => handleEditData(data)}
        />
        <Button
          title="Excluir"
          backgroundColor={theme.colors.redF3A}
          borderColor={theme.colors.redF63}
          onClick={handleDeleteModal}
        />
      </ContainerItem>
    );
  };

  return (
    <Container>
      <MainColumn>
        <Information>
          <TitleInformation>O que são as categorias?</TitleInformation>
          <TextInformation>
            As categorias facilitam a organização dos seus gastos. Tem despesas
            recorrentes e similares que você quer agrupar? Basta criar uma
            categoria e, ao registrar um novo gasto, associá-lo a ela.
            Categorias como alimentação, moradia e lazer já estão prontas para
            você começar a usar. Crie suas próprias categorias personalizadas e
            descubra como fica mais fácil entender e controlar o seu dinheiro!
          </TextInformation>
        </Information>
        <Image src={InputOutput1} alt="PoupaPig" />
      </MainColumn>
      <MainColumn>
        <Column>
          {dataCategory.map((category: CategoriaInt, key) =>
            itemCategory(category)
          )}
        </Column>
        <ButtonsDiv>
          <Button
            title="Adicionar categoria"
            minWidth="300px"
            onClick={handleCategoryForm}
          />
        </ButtonsDiv>
      </MainColumn>
      {modalDelete && (
        <CustomModal
          onClose={handleDeleteModal}
          action={handleDeleteData}
          titleButtonCancel="Cancelar"
          titleButtonGo="Confirmar"
          message="Tem certeza que deseja excluir o dado cadastrado?"
        />
      )}
    </Container>
  );
}
