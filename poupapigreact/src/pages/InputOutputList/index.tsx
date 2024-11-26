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
  ButtonsDiv,
  Column,
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
import { TransacaoInt } from "../../interfaces";

const dataInputOutput: TransacaoInt[] = [
  {
    id: 1,
    nome: "Compra 1",
    valor: 123,
    categoria_id: 1,
    banco_id: 1,
    meta_investimento_id: 1,
    tipo_pagamento_id: 1,
    recorrencia_id: 1,
    data_transacao: "09/11/2024",
    quantidade_parcela: 12,
    tipo_id: 1,
    situacao_id: 1,
    periodicidade_id: 1,
    sentimento_id: 1,
    observacao: "observação",
  },
  {
    id: 2,
    nome: "Compra 2",
    valor: 123,
    categoria_id: 1,
    banco_id: 1,
    meta_investimento_id: 1,
    tipo_pagamento_id: 1,
    recorrencia_id: 1,
    data_transacao: "09/11/2024",
    quantidade_parcela: 12,
    tipo_id: 2,
    situacao_id: 1,
    periodicidade_id: 1,
    sentimento_id: 1,
    observacao: "observação",
  },
  {
    id: 3,
    nome: "Compra 3",
    valor: 123,
    categoria_id: 1,
    banco_id: 1,
    meta_investimento_id: 1,
    tipo_pagamento_id: 1,
    recorrencia_id: 1,
    data_transacao: "09/11/2024",
    quantidade_parcela: 12,
    tipo_id: 1,
    situacao_id: 2,
    periodicidade_id: 1,
    sentimento_id: 1,
    observacao: "observação",
  },
  {
    id: 4,
    nome: "Compra 4",
    valor: 123,
    categoria_id: 1,
    banco_id: 1,
    meta_investimento_id: 1,
    tipo_pagamento_id: 1,
    recorrencia_id: 1,
    data_transacao: "09/11/2024",
    quantidade_parcela: 12,
    tipo_id: 1,
    situacao_id: 1,
    periodicidade_id: 1,
    sentimento_id: 1,
    observacao: "observação",
  },
];

export function InputOutputList() {
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const handleEditData = (data: TransacaoInt) => {
    navigate("/input-output-form", { state: { transactionData: data } });
  };

  const handleDeleteModal = () => {
    setModalDelete(!modalDelete);
  };

  const handleDeleteData = () => {
    console.log("deletei");
    setModalDelete(false);
  };

  const handleTransactionForm = () => {
    navigate("/input-output-form");
  };

  const itemInputOutput = (data: TransacaoInt) => {
    return (
      <ContainerItem>
        <Symbol $type={data.tipo_id}>
          {data.tipo_id === 2 ? (
            <ArrowDownwardIcon
              style={{ fontSize: 30, color: theme.colors.green0FB }}
            />
          ) : (
            <ArrowUpwardIcon
              style={{ fontSize: 30, color: theme.colors.redF63 }}
            />
          )}
        </Symbol>
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
        <Column>
          {dataInputOutput
            .filter((investment: TransacaoInt) => investment.situacao_id === 1)
            .map((investment) => itemInputOutput(investment))}
        </Column>
      </MainColumn>
      {/* AQUI VEM A COLUNA DE METAS */}
      <MainColumn>
        <Column>
          {dataInputOutput
            .filter((investment: TransacaoInt) => investment.situacao_id === 2)
            .map((investment) => itemInputOutput(investment))}
        </Column>
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
        <ButtonsDiv>
          <Button
            title="Adicionar lançamento"
            minWidth="300px"
            onClick={handleTransactionForm}
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
