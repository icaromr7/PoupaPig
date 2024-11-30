import React, { useEffect, useRef, useState } from "react";

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
  ButtonsDiv,
  Column,
} from "./style";
import theme from "../../styles/theme";
import InvestmentGoalList1 from "../../assets/svg/investmentgoallist1.svg";
import Landpage3 from "../../assets/svg/landpage3.svg";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../../components/CustomModal";
import { useAuth } from "../../context/AuthContext";
import {
  deleteMetaInvestimento,
  getMetaInvestimento,
} from "../../services/api";
import { InvestimentoMetaInt } from "../../interfaces";

export function InvestmentGoalList() {
  const { addToast, setLoading, userCode } = useAuth();
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [metasInvestimentos, setMetasInvestimentos] = useState<
    InvestimentoMetaInt[]
  >([]);
  const [selectedToDelete, setSelectedToDelete] =
    useState<InvestimentoMetaInt>();
  const flag = useRef<boolean>(true);

  const fetchUserData = async () => {
    if (userCode) {
      try {
        setLoading(true);
        const metaInvestimento = await getMetaInvestimento();
        setMetasInvestimentos(metaInvestimento);
      } catch (error: any) {
        addToast({ message: error.message, type: "error" });
        console.error("Erro ao obter as categorias padrões", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditData = (data: InvestimentoMetaInt) => {
    navigate("/investment-goal-form?editing=true", {
      state: { investmentGoalData: data },
    });
  };

  const handleOpenDeleteModal = (data: InvestimentoMetaInt) => {
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
        await deleteMetaInvestimento(selectedToDelete.id);
        await fetchUserData();
      } catch (error: any) {
        addToast({ message: error.message, type: "error" });
        console.error("Erro ao apagar dado", error);
      } finally {
        setLoading(false);
        setModalDelete(false);
      }
    }
  };

  const handleInvestmentGoalForm = () => {
    navigate("/investment-goal-form");
  };

  useEffect(() => {
    if (flag.current) {
      fetchUserData();
      setTimeout(() => {
        flag.current = false;
      }, 1000);
    }
  }, [userCode]);

  const itemInvestment = (data: InvestimentoMetaInt, key: any) => {
    return (
      <ContainerItem key={key}>
        <Symbol>
          <MonetizationOnIcon
            style={{ fontSize: 45, color: theme.colors.blue038 }}
          />
        </Symbol>
        <Input name={key} placeholder={data.nome} fixedValue={data.nome} />
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

  const itemGoal = (data: any, key: any) => {
    return (
      <ContainerItem key={key}>
        <Symbol>
          <AccountBalanceWalletIcon
            style={{ fontSize: 45, color: theme.colors.orangeEE7 }}
          />
        </Symbol>
        <Input name={key} placeholder={data.nome} fixedValue={data.nome} />
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
      {/* AQUI VEM A COLUNA DE INVESTIMENTOS */}
      <MainColumn>
        <InfoColumn>
          <Image src={InvestmentGoalList1} alt="PoupaPig" />
          <Information>
            <TitleInformation>O que são investimentos?</TitleInformation>
            <TextInformation>
              Investimentos são recursos aplicados por um período mínimo,
              durante o qual eles geram rendimentos, aumentando o valor inicial.
              Essa é uma excelente opção para quem tem valores que não serão
              necessários a curto prazo e deseja realizar grandes aquisições,
              como a compra de um imóvel, automóvel, ou para alcançar algum
              sonho.
            </TextInformation>
          </Information>
        </InfoColumn>
        <Column>
          {metasInvestimentos.filter(
            (investment) => investment.tipo_objetivo_id === 2
          ).length === 0 ? (
            <TitleInformation
              style={{ fontSize: 15, color: theme.colors.grey6F7 }}
            >
              Usuário não tem investimentos cadastrados.
            </TitleInformation>
          ) : (
            metasInvestimentos
              .filter((investment) => investment.tipo_objetivo_id === 2)
              .map((investment) =>
                itemInvestment(
                  investment,
                  `${investment.id}-${investment.nome}`
                )
              )
          )}
        </Column>
      </MainColumn>
      {/* AQUI VEM A COLUNA DE METAS */}
      <MainColumn>
        <Column>
          {metasInvestimentos.filter(
            (investment) => investment.tipo_objetivo_id === 1
          ).length === 0 ? (
            <TitleInformation
              style={{ fontSize: 15, color: theme.colors.grey6F7 }}
            >
              Usuário não tem metas cadastradas.
            </TitleInformation>
          ) : (
            metasInvestimentos
              .filter((investment) => investment.tipo_objetivo_id === 1)
              .map((investment) =>
                itemGoal(investment, `${investment.id}-${investment.nome}`)
              )
          )}
        </Column>
        <InfoColumn>
          <Image src={Landpage3} alt="PoupaPig" style={{ height: 205 }} />
          <Information>
            <TitleInformation>O que são metas financeiras?</TitleInformation>
            <TextInformation>
              Metas ou objetivos são quantias que você deseja juntar para
              realizar compras menores, sem a necessidade de gerar rendimentos
              ou cumprir um prazo mínimo para retirada. Pode ser para um
              presente, a compra de um eletrodoméstico ou uma pequena viagem —
              valores que você pretende reunir em poucos meses. Aqui, funciona
              como um verdadeiro cofrinho, que você pode "quebrar" a qualquer
              momento.
            </TextInformation>
          </Information>
        </InfoColumn>
        <ButtonsDiv>
          <Button
            title="Adicionar investimento ou meta"
            minWidth="300px"
            onClick={handleInvestmentGoalForm}
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
