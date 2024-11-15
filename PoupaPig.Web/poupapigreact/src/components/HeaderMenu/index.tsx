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

  const handleAccountConfig = () => {
    navigate("/config-account");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Container>
      {notification && (
        <>
          <Line>Hoje é dia de pagar a conta xxxx</Line>
          <Line>Hoje é dia de pagar </Line>
          <Line>Hoje é dia de pagar a conta xxxx</Line>
          <Line>Hoje é dia de pagar a conta xxxx</Line>
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
