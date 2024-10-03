import React, { useState } from "react";

//style, icons e assets
import {
  Container,
  LogoEvicya,
  LogoEvicyaImage,
  TitleEvicya,
  UtilInfo,
  Text,
  LogoPoupaPig,
} from "./style";
import LogoPP from "../../assets/svg/logopp.svg";
import LogoEmpresa from "../../assets/png/logoempresa.png";
import { useMobileScreen } from "../../routes/MobileScreenProvider";

export function Footer() {
  const isMobileScreen = useMobileScreen();
  return (
    <Container>
      <LogoEvicya>
        <LogoEvicyaImage src={LogoEmpresa} alt="EIV" />
        <TitleEvicya>EVICYA COMPANY</TitleEvicya>
      </LogoEvicya>
      <UtilInfo>
        <Text>Sobre a poupaPig</Text>
        <Text>Ajuda | Fale conosco</Text>
        <Text style={{ fontSize: 10 }}>
          © 2024 poupaPig. Todos os direitos reservados.
        </Text>
      </UtilInfo>
      <LogoPoupaPig src={LogoPP} alt="poupaPig" />
    </Container>
  );
}
