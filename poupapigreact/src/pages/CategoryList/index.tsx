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
} from "./style";
import theme from "../../styles/theme";
import InputOutput1 from "../../assets/svg/inputoutputlist1.svg";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { CustomModal } from "../../components/CustomModal";

// Lista de categorias (exemplo)
const dataCategory = [
  {
    nome: "Teste 1",
    icon: "IceCream",
  },
  {
    nome: "Teste 2",
    icon: "Bathtub",
  },
  {
    nome: "Teste 3",
    icon: "CarRepair",
  },
  {
    nome: "Teste 4",
    icon: "ChildFriendly",
  },
  {
    nome: "Teste 5",
    icon: "Cookie",
  },
  {
    nome: "Teste 6",
    icon: "DeliveryDining",
  },
];

export function CategoryList() {
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [icons, setIcons] = useState<any>({});

  // // Função para carregar o ícone dinamicamente com base no nome
  // const loadIcon = async (iconName: string) => {
  //   console.log("iconname", iconName);
  //   try {
  //     // Adiciona o sufixo 'Icon' ao nome do ícone
  //     const { default: IconComponent } = await import(
  //       `@mui/icons-material/${iconName}`
  //     );
  //     console.log("IconComponent", IconComponent);
  //     return IconComponent;
  //   } catch (error) {
  //     console.error(`Erro ao carregar o ícone ${iconName}`, error);
  //     return null; // Retorna null se o ícone não for encontrado
  //   }
  // };

  // // Função que carrega os ícones de todas as categorias no início
  // useEffect(() => {
  //   const fetchIcons = async () => {
  //     const iconPromises = dataCategory.map(async (category) => {
  //       const IconComponent = await loadIcon(category.icon);
  //       return { [category.icon]: IconComponent };
  //     });
  //     const iconsResult = await Promise.all(iconPromises);
  //     setIcons(Object.assign({}, ...iconsResult));
  //   };

  //   fetchIcons();
  // }, []);

  const handleEditData = () => {
    navigate("/input-output-form");
  };

  const handleDeleteModal = () => {
    setModalDelete(!modalDelete);
  };

  const handleDeleteData = () => {
    console.log("deletei");
    setModalDelete(false);
  };

  const itemCategory = (data: any, key: any) => {
    const Icon = icons[data.icon]; // Pega o ícone carregado dinamicamente
    return (
      <ContainerItem key={key}>
        {/* <Symbol>{Icon ? <Icon /> : null}</Symbol>{" "} */}
        {/* Exibe o ícone, se disponível */}
        <Input name={key} placeholder={data.nome} fixedValue={data.nome} />
        <Button
          title="Editar"
          backgroundColor={theme.colors.yellowF9F}
          borderColor={theme.colors.yellowDAD}
          onClick={handleEditData}
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
          {dataCategory.map((category, index) =>
            itemCategory(category, index + "-" + category.icon)
          )}
        </Column>
        <ButtonsDiv>
          <Button title="Adicionar categoria" minWidth="300px" />
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
