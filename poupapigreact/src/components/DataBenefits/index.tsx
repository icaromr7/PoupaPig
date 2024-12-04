import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//style
import {
  ContainerBenefits,
  TitleBenefit,
  NameBenefit,
  ButtonDiv,
  Container,
  Overlay,
  Header,
  Title,
  Close,
  Body,
  Footer,
} from "./style";
import theme from "../../styles/theme";

//importações internas
import CustomSelect from "../CustomSelect";
import { Button } from "../Button";
import {
  getAssinaturaByUsuarioId,
  getAssinaturas,
  getBancoByUsuarioId,
  getBancos,
  getCartaoByUsuarioId,
  getCartoes,
  postUsuarioAssinatura,
  postUsuarioBanco,
  postUsuarioCartao,
} from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { GenericData } from "../../interfaces";

const schemaCartao = yup.object().shape({
  cartao_id: yup.number().required("Campo obrigatório"),
});

const schemaBanco = yup.object().shape({
  banco_id: yup.number().required("Campo obrigatório"),
});

const schemaAssinatura = yup.object().shape({
  assinatura_id: yup.number().required("Campo obrigatório"),
});

interface DataBenefitsProps {
  title: string;
  titleButton: string;
  type: "cartao" | "banco" | "assinatura";
  id: string;
}

export function DataBenefits({
  title,
  titleButton,
  type,
  id,
}: DataBenefitsProps) {
  const { addToast, setLoading, userCode } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const [assinaturasUser, setAssinaturasUser] = useState<GenericData[]>([]);
  const [bancosUser, setBancosUser] = useState<GenericData[]>([]);
  const [cartoesUser, setCartoesUser] = useState<GenericData[]>([]);
  const [chunkedData, setChunkedData] = useState<any[]>([]);

  const {
    register: registerCartao,
    handleSubmit: handleSubmitCartao,
    formState: { errors: errorsCartao },
    setValue: setValueCartao,
  } = useForm({
    resolver: yupResolver(schemaCartao),
  });

  const {
    register: registerBanco,
    handleSubmit: handleSubmitBanco,
    formState: { errors: errorsBanco },
    setValue: setValueBanco,
  } = useForm({
    resolver: yupResolver(schemaBanco),
  });

  const {
    register: registerAssinatura,
    handleSubmit: handleSubmitAssinatura,
    formState: { errors: errorsAssinatura },
    setValue: setValueAssinatura,
  } = useForm({
    resolver: yupResolver(schemaAssinatura),
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    handleButtonClick();
  };

  const fetchCartoes = async () => {
    try {
      setLoading(true);
      const data = await getCartoes();
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAssinaturas = async () => {
    try {
      setLoading(true);
      const data = await getAssinaturas();
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBancos = async () => {
    try {
      setLoading(true);
      const data = await getBancos();
      return data;
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar itens",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    try {
      setLoading(true);
      let fetchedData;
      if (type === "assinatura") {
        fetchedData = await fetchAssinaturas();
      }
      if (type === "banco") {
        fetchedData = await fetchBancos();
      }
      if (type === "cartao") {
        fetchedData = await fetchCartoes();
      }
      setModalData(fetchedData);
    } catch (error) {
      console.error("Erro ao buscar dados para o modal", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const assinatura = await getAssinaturaByUsuarioId(Number(userCode));
      setAssinaturasUser(assinatura);
      const banco = await getBancoByUsuarioId(Number(userCode));
      setBancosUser(banco);
      const cartao = await getCartaoByUsuarioId(Number(userCode));
      console.log("aqui", assinatura, banco, cartao);
      setCartoesUser(cartao);
    } catch (error: any) {
      addToast({
        message: error.message,
        title: "Erro ao buscar dados",
        type: "error",
      });
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitDataBenefits = async (data: any) => {
    const combinedData = {
      ...data,
      usuario_id: Number(userCode),
    };
    if (type === "assinatura") {
      try {
        setLoading(true);
        const data = await postUsuarioAssinatura(combinedData);
        handleCloseModal();
        fetchData();
        return data;
      } catch (error: any) {
        addToast({
          message: error.message,
          title: "Erro ao buscar itens",
          type: "error",
        });
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    }
    if (type === "banco") {
      try {
        setLoading(true);
        const data = await postUsuarioBanco(combinedData);
        handleCloseModal();
        fetchData();
        return data;
      } catch (error: any) {
        addToast({
          message: error.message,
          title: "Erro ao buscar itens",
          type: "error",
        });
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    }
    if (type === "cartao") {
      try {
        setLoading(true);
        const data = await postUsuarioCartao(combinedData);
        handleCloseModal();
        fetchData();
        return data;
      } catch (error: any) {
        addToast({
          message: error.message,
          title: "Erro ao buscar itens",
          type: "error",
        });
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [userCode]);

  useEffect(() => {
    let dataToChunk: any[] = [];

    switch (type) {
      case "cartao":
        dataToChunk = cartoesUser.map((item) => item.nome);
        break;
      case "banco":
        dataToChunk = bancosUser.map((item) => item.nome);
        break;
      case "assinatura":
        dataToChunk = assinaturasUser.map((item) => item.nome);
        break;
      default:
        dataToChunk = [];
    }

    // Chunk the data into groups of 3
    const chunks = [];
    for (let i = 0; i < dataToChunk.length; i += 3) {
      chunks.push(dataToChunk.slice(i, i + 3));
    }
    setChunkedData(chunks);
  }, [cartoesUser, bancosUser, assinaturasUser]);

  return (
    <ContainerBenefits onClick={handleButtonClick}>
      <TitleBenefit>{title}</TitleBenefit>
      {chunkedData.map((group, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: 200,
            whiteSpace: "wrap",
          }}
        >
          {group.map((name: string, idx: number) => (
            <React.Fragment key={idx}>
              <NameBenefit>{name}</NameBenefit>
              {idx < group.length - 1 && (
                <span style={{ margin: "0 8px" }}>|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
      <ButtonDiv>
        <Button title={titleButton} minWidth="100%" onClick={handleModalOpen} />
      </ButtonDiv>
      {isModalOpen && (
        <Overlay>
          <Container>
            <Header>
              <Title>{title}</Title>
              <Close onClick={handleCloseModal} />
            </Header>
            <Body>
              {" "}
              <CustomSelect
                name={
                  type === "assinatura"
                    ? "assinatura_id"
                    : type === "banco"
                    ? "banco_id"
                    : "cartao_id"
                }
                placeholder={titleButton}
                data={modalData}
                error={
                  type === "assinatura"
                    ? errorsAssinatura.assinatura_id?.message
                    : type === "banco"
                    ? errorsBanco.banco_id?.message
                    : errorsCartao.cartao_id?.message
                }
                register={
                  type === "assinatura"
                    ? registerAssinatura
                    : type === "banco"
                    ? registerBanco
                    : registerCartao
                }
                setValue={
                  type === "assinatura"
                    ? setValueAssinatura
                    : type === "banco"
                    ? setValueBanco
                    : setValueCartao
                }
              />
            </Body>
            <Footer>
              <Button
                title="Cancelar"
                backgroundColor={theme.colors.greyB8C}
                borderColor={theme.colors.grey6F7}
                onClick={handleCloseModal}
              />
              <Button
                title="Confirmar"
                onClick={() => {
                  if (type === "assinatura") {
                    handleSubmitAssinatura(handleSubmitDataBenefits)();
                  } else if (type === "banco") {
                    handleSubmitBanco(handleSubmitDataBenefits)();
                  } else {
                    handleSubmitCartao(handleSubmitDataBenefits)();
                  }
                }}
              />
            </Footer>
          </Container>
        </Overlay>
      )}
    </ContainerBenefits>
  );
}
