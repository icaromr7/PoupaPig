import React, { useState } from "react";
import { Container, Line, TextObservation } from "./style";
import { CustomModal } from "../CustomModal";
import Checkbox from "../Checkbox";

interface HeaderMenuProps {
  notification?: boolean;
  config?: boolean;
}

export function HeaderMenu({ notification, config }: HeaderMenuProps) {
  const [showNotificationsModal, setShowNotificationsModal] =
    useState<boolean>(false);

  const handleCheckbox = (checked: boolean) => {
    console.log("checked", checked);
  };

  const bodyModal = (
    <>
      <Checkbox label="Notificação 01" onChange={handleCheckbox} />
      <Checkbox label="Notificação 02" onChange={handleCheckbox} />
      <Checkbox label="Notificação 03" onChange={handleCheckbox} />
    </>
  );

  const handleCloseModal = () => {
    setShowNotificationsModal(false);
  };
  return (
    <Container>
      {notification && (
        <>
          <Line>Hoje é dia de pagar a conta xxxx</Line>
          <Line>Hoje é dia de pagar </Line>
          <Line>Hoje é dia de pagar a conta xxxx</Line>
          <Line>Hoje é dia de pagar a conta xxxx</Line>
          <TextObservation onClick={() => setShowNotificationsModal(true)}>
            Não deseja mais receber notificações? Clique aqui.
          </TextObservation>
          {showNotificationsModal && (
            <CustomModal
              body={bodyModal}
              titleButtonCancel="Cancelar"
              titleButtonGo="Salvas"
              onClose={handleCloseModal}
            />
          )}
        </>
      )}
      {config && (
        <>
          <Line>Minha conta</Line>
          <Line>Sair</Line>
        </>
      )}
    </Container>
  );
}
