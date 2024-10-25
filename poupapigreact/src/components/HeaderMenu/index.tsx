import React, { useState } from "react";
import { Container, Line, TextObservation } from "./style";
import { CustomModal } from "../CustomModal";
import Checkbox from "../Checkbox";
import { useNavigate } from "react-router-dom";

interface HeaderMenuProps {
  notification?: boolean;
  config?: boolean;
}

export function HeaderMenu({ notification, config }: HeaderMenuProps) {
  const navigate = useNavigate();
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

  const handleAccountConfig = () => {
    navigate("/config-account");
  };

  const handleLogout = () => {
    navigate("/login");
  };

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
          {/* <TextObservation onClick={() => setShowNotificationsModal(true)}>
            Não deseja mais receber notificações? Clique aqui.
          </TextObservation>
          {showNotificationsModal && (
            <CustomModal
              message={bodyModal}
              titleButtonCancel="Cancelar"
              titleButtonGo="Salvas"
              onClose={handleCloseModal}
              action={() => console.log("oi?")}
            />
          )} */}
        </>
      )}
      {config && (
        <>
          <Line onClick={handleAccountConfig}>Minha conta</Line>
          <Line onClick={handleLogout}>Sair</Line>
        </>
      )}
    </Container>
  );
}
