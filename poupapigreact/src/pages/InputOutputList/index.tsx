import React, { useEffect, useRef, useState } from "react";

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
import { useAuth } from "../../context/AuthContext";
import {
  deleteTransacao,
  getLancamentos,
  getLancamentosCompletos,
} from "../../services/api";

export function InputOutputList() {
  const { addToast, setLoading, userCode } = useAuth();
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [transacoes, setTransacoes] = useState<TransacaoInt[]>([]);
  const flag = useRef<boolean>(true);
  const [selectedToDelete, setSelectedToDelete] = useState<TransacaoInt>();

  const handleEditData = (data: TransacaoInt) => {
    navigate("/input-output-form", { state: { transactionData: data } });
  };

  const handleOpenDeleteModal = (data: TransacaoInt) => {
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
        await deleteTransacao(selectedToDelete.id);
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

  const handleTransactionForm = () => {
    navigate("/input-output-form");
  };

  const fetchUserData = async () => {
    if (userCode) {
      try {
        setLoading(true);
        const transacao = await getLancamentosCompletos(Number(userCode));
        console.log("transação", transacao);
        setTransacoes(transacao);
      } catch (error: any) {
        addToast({ message: error.message, type: "error" });
        console.error("Erro ao obter as categorias padrões", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (flag.current) {
      fetchUserData();
      setTimeout(() => {
        flag.current = false;
      }, 1000);
    }
  }, [userCode]);

  const itemInputOutput = (data: TransacaoInt, key: number) => {
    return (
      <ContainerItem key={key}>
        <Symbol $type={data.tipo_id}>
          {data.tipo_id === 1 ? (
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
          {transacoes.filter(
            (transacao: TransacaoInt) => transacao.periodicidade_id === 2
          ).length === 0 ? (
            <TitleInformation
              style={{ fontSize: 15, color: theme.colors.grey6F7 }}
            >
              Usuário não tem dados fixos cadastrados.
            </TitleInformation>
          ) : (
            transacoes
              .filter(
                (transacao: TransacaoInt) => transacao.periodicidade_id === 2
              )
              .map((transacao) => itemInputOutput(transacao, transacao.id))
          )}
        </Column>
      </MainColumn>
      {/* AQUI VEM A COLUNA DE METAS */}
      <MainColumn>
        <Column>
          {transacoes.filter(
            (transacao: TransacaoInt) => transacao.periodicidade_id === 1
          ).length === 0 ? (
            <TitleInformation
              style={{ fontSize: 15, color: theme.colors.grey6F7 }}
            >
              Usuário não tem dados flutuantes cadastrados.
            </TitleInformation>
          ) : (
            transacoes
              .filter(
                (transacao: TransacaoInt) => transacao.periodicidade_id === 1
              )
              .map((transacao) => itemInputOutput(transacao, transacao.id))
          )}
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
