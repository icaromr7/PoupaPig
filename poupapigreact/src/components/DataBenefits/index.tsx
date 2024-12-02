import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//style
import {
  ContainerBenefits,
  TitleBenefit,
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
  getAssinaturas,
  getBancos,
  getCartoes,
  postUsuarioAssinatura,
  postUsuarioBanco,
  postUsuarioCartao,
} from "../../services/api";
import { useAuth } from "../../context/AuthContext";

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
    console.log("fechei");
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
      console.log("erro");
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
      console.log("erro");
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
      console.log("erro");
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

  const handleSubmitDataBenefits = async (data: any) => {
    const combinedData = {
      ...data,
      usuario_id: Number(userCode),
    };
    console.log("data", combinedData);
    if (type === "assinatura") {
      try {
        setLoading(true);
        const data = await postUsuarioAssinatura(combinedData);
        handleCloseModal();
        return data;
      } catch (error: any) {
        console.log("erro");
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
        return data;
      } catch (error: any) {
        console.log("erro");
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
        return data;
      } catch (error: any) {
        console.log("erro");
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

  const chunkedData = [];
  useEffect(() => {
    //pegar os cartões cadastrados pelo usuário e inserir no chuncked data, mantendo a lógica
  }, []);
  //   for (let i = 0; i < modalData.length; i += 3) {
  //     chunkedData.push(modalData.slice(i, i + 3));
  //   }

  return (
    <ContainerBenefits onClick={handleButtonClick}>
      <TitleBenefit>{title}</TitleBenefit>
      {/* {chunkedData.map((group, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          {group.map((x: any, idx: any) => (
            <React.Fragment key={idx}>
              <NameBenefit>{x}</NameBenefit>
              {idx < group.length - 1 && (
                <span style={{ margin: "0 8px" }}>|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ))} */}
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
