import React, { useState } from "react";

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

const dataInvestment = [
  {
    nome: "Casa",
  },
  {
    nome: "Carro",
  },
  {
    nome: "Fundo monetário",
  },
  {
    nome: "Imóvel 2",
  },
];

export function InvestmentGoalList() {
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const handleEditData = () => {
    navigate("/investment-goal-form");
  };

  const handleDeleteModal = () => {
    setModalDelete(!modalDelete);
  };

  const handleDeleteData = () => {
    console.log("deletei");
    setModalDelete(false);
  };

  const itemInvestment = (data: any, key: any) => {
    return (
      <ContainerItem>
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

  const itemGoal = (data: any, key: any) => {
    return (
      <ContainerItem>
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
        />
        <Button
          title="Excluir"
          backgroundColor={theme.colors.redF3A}
          borderColor={theme.colors.redF63}
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
        {dataInvestment.map((investment, index) =>
          itemInvestment(investment, index + "-" + investment)
        )}
      </MainColumn>
      {/* AQUI VEM A COLUNA DE METAS */}
      <MainColumn>
        {dataInvestment.map((goal, index) =>
          itemGoal(goal, index + "-" + goal)
        )}
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
