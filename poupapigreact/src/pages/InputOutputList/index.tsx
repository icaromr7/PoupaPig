import React, { useState } from "react";

//style, assets e icons
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
import InputOutput1 from "../../assets/svg/inputoutputlist1.svg";
import InputOutput2 from "../../assets/svg/inputoutputlist2.svg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../../components/CustomModal";

const dataInputOutput = [
  {
    nome: "Teste 1",
    tipo: "out",
    situ: "fixo",
  },
  {
    nome: "Teste 2",
    tipo: "in",
    situ: "flutuante",
  },
  {
    nome: "Teste 3",
    tipo: "out",
    situ: "flutuante",
  },
  {
    nome: "Teste 4",
    tipo: "out",
    situ: "fixo",
  },
  {
    nome: "Teste 5",
    tipo: "out",
    situ: "fixo",
  },
  {
    nome: "Teste 6",
    tipo: "in",
    situ: "flutuante",
  },
  {
    nome: "Teste 7",
    tipo: "out",
    situ: "flutuante",
  },
  {
    nome: "Teste 8",
    tipo: "out",
    situ: "fixo",
  },
];

export function InputOutputList() {
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);

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

  const itemInputOutput = (data: any, key: any) => {
    return (
      <ContainerItem>
        <Symbol $type={data.tipo}>
          {data.tipo === "in" ? (
            <ArrowDownwardIcon
              style={{ fontSize: 30, color: theme.colors.green0FB }}
            />
          ) : (
            <ArrowUpwardIcon
              style={{ fontSize: 30, color: theme.colors.redF63 }}
            />
          )}
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
  return (
    <Container>
      {/* AQUI VEM A COLUNA DE INVESTIMENTOS */}
      <MainColumn>
        <InfoColumn>
          <Image src={InputOutput1} alt="PoupaPig" />
          <Information>
            <TitleInformation>O que são dados fixos?</TitleInformation>
            <TextInformation>
              São despesas que se repetem todos os meses com o mesmo valor, como
              a mensalidade da academia, assinaturas recorrentes, ou
              mensalidades escolares e universitárias. Esses gastos são
              previsíveis e constantes, permitindo que você os cadastre uma
              única vez, marcando a opção de repetição automática.
            </TextInformation>
          </Information>
        </InfoColumn>
        {dataInputOutput
          .filter((investment) => investment.situ === "fixo")
          .map((investment, index) =>
            itemInputOutput(investment, index + "-" + investment)
          )}
      </MainColumn>
      {/* AQUI VEM A COLUNA DE METAS */}
      <MainColumn>
        {dataInputOutput
          .filter((investment) => investment.situ === "flutuante")
          .map((investment, index) =>
            itemInputOutput(investment, index + "-" + investment)
          )}
        <InfoColumn>
          <Image src={InputOutput2} alt="PoupaPig" style={{ height: 205 }} />
          <Information>
            <TitleInformation>O que são dados flutuantes?</TitleInformation>
            <TextInformation>
              São despesas que podem se repetir, mas com valores variáveis, como
              contas de energia, água, ou gastos com gasolina/transporte. Também
              incluem despesas menos frequentes, como compras de roupas, compras
              online ou idas a restaurantes. Para esses gastos, você precisará
              registrar cada um separadamente, com o valor correspondente, sem
              opção de recorrência.
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
