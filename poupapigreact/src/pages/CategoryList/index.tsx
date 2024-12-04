import React, { useState, useEffect, useRef } from "react";
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
import { deleteCategoria, getCategoriasUsuario } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export function CategoryList() {
  const { addToast, setLoading, userCode } = useAuth();
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<CategoriaInt[]>([]);
  const flag = useRef<boolean>(true);
  const [selectedToDelete, setSelectedToDelete] = useState<CategoriaInt>();

  const handleEditData = (data: CategoriaInt) => {
    navigate("/category-form?editing=true", { state: { categoryData: data } });
  };

  const fetchUserData = async () => {
    if (userCode) {
      try {
        setLoading(true);
        const categorias = await getCategoriasUsuario(Number(userCode));
        setCategorias(categorias);
      } catch (error: any) {
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao buscar dados",
        });
        console.error("Erro ao obter as categorias", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOpenDeleteModal = (data: CategoriaInt) => {
    setSelectedToDelete(data);
    setModalDelete(true);
  };

  const handleCloseDeleteModal = () => {
    setModalDelete(false);
  };

  const handleDeleteData = async () => {
    if (selectedToDelete) {
      try {
        setLoading(true);
        await deleteCategoria(selectedToDelete.id);
        await fetchUserData();
      } catch (error: any) {
        addToast({
          message: error.message,
          type: "error",
          title: "Erro ao apagar dado",
        });
        console.error("Erro ao apagar dado", error);
      } finally {
        setLoading(false);
        setModalDelete(false);
      }
    }
  };

  const handleCategoryForm = () => {
    navigate("/category-form");
  };

  useEffect(() => {
    if (flag.current) {
      fetchUserData();
      setTimeout(() => {
        flag.current = false;
      }, 1000);
    }
  }, [userCode]);

  const itemCategory = (data: CategoriaInt) => {
    return (
      <ContainerItem key={`${data.id}-${data.nome}`}>
        <Symbol>
          {data.icone ? (
            showIconPicked(data.icone)
          ) : (
            <IconPoupaPig src={IconePig} alt="Icon" />
          )}
        </Symbol>{" "}
        {/* Exibe o ícone, se disponível */}
        <Input
          name={data.nome}
          placeholder={data.nome}
          fixedValue={data.nome}
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
          onClick={() => handleOpenDeleteModal(data)}
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
          {categorias.length ? (
            categorias.map((category: CategoriaInt, key) =>
              itemCategory(category)
            )
          ) : (
            <TitleInformation
              style={{ fontSize: 15, color: theme.colors.grey6F7 }}
            >
              Usuário ainda não tem categorias cadastradas.
            </TitleInformation>
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
          onClose={handleCloseDeleteModal}
          action={handleDeleteData}
          titleButtonCancel="Cancelar"
          titleButtonGo="Confirmar"
          message="Tem certeza que deseja excluir o dado cadastrado?"
        />
      )}
    </Container>
  );
}
