import React, { useState } from "react";
import { Container, ContainerLandpage, ButtonsDiv } from "./style";
import { ButtonHeader } from "../ButtonHeader";

interface HeaderProps {
  type: "landpage" | "login" | "default";
}

export function Header() {
  const bodyLandpage = (
    <ContainerLandpage>
      {/* <Logo /> */}
      <ButtonsDiv>
        <ButtonHeader title="Criar conta" />
        <ButtonHeader title="Entrar" />
      </ButtonsDiv>
    </ContainerLandpage>
  );
  return <Container></Container>;
}
