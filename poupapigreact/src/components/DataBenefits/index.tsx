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
} from "./style";

//importações internas
import { GenericData } from "../../interfaces";
import CustomSelect from "../CustomSelect";
import { Button } from "../Button";
import { CustomModal } from "../CustomModal";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
});

interface DataBenefitsProps {
  title: string;
  titleButton: string;
  onClick: () => void;
  id: string;
}

export function DataBenefits({
  title,
  titleButton,
  onClick,
  id,
}: DataBenefitsProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleButtonClick = async () => {
    try {
      setModalOpen(true);
      const fetchedData = await onClick();
      setModalData(fetchedData);
    } catch (error) {
      console.error("Erro ao buscar dados para o modal", error);
    }
  };

  const handleSubmitDataBenefits = (data: any) => {
    console.log("data", data);
  };

  const chunkedData = [];
  useEffect(() => {
    //pegar os cartões cadastrados pelo usuário e inserir no chuncked data, mantendo a lógica
  }, []);
  //   for (let i = 0; i < modalData.length; i += 3) {
  //     chunkedData.push(modalData.slice(i, i + 3));
  //   }

  return (
    <ContainerBenefits onClick={onClick}>
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
        <Button
          title={titleButton}
          minWidth="100%"
          onClick={handleButtonClick}
        />
      </ButtonDiv>
      {isModalOpen && (
        <CustomModal
          message={
            <CustomSelect
              name={id}
              placeholder={titleButton}
              data={modalData}
              error={errors.nome?.message}
              register={register}
              setValue={setValue}
            />
          }
          title={title}
          titleButtonCancel="Cancelar"
          titleButtonGo="Confirmar"
          action={handleSubmit(handleSubmitDataBenefits)}
          onClose={() => setModalOpen(false)}
        />
      )}
    </ContainerBenefits>
  );
}
