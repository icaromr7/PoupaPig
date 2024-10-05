import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//importações internas
import { ButtonHeader } from "../ButtonHeader";
import theme from "../../styles/theme";
import { useMobileScreen } from "../../routes/MobileScreenProvider";

//assets, icons e estilo
import {
  Container,
  ContainerLandpage,
  LogoLandpage,
  ButtonsDiv,
  ContainerLogin,
  LogoLogin,
  ContainerDefault,
  LogoDefault,
  ButtonsDivDefault,
  ContainerMobileMenuLandpage,
  ButtonsDivLandpageMobile,
} from "./style";
import Logo from "../../assets/svg/logopp.svg";
import LogoTitulo from "../../assets/svg/logotitulo.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  type: "landpage" | "signin" | "default";
}

export function Header({ type }: HeaderProps) {
  const isMobileScreen = useMobileScreen();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignIn = () => {
    console.log("oi?");
    navigate("/sign-in");
  };

  const MobileMenuLandpage = (
    <ContainerMobileMenuLandpage>
      <ButtonsDivLandpageMobile>
        <ButtonHeader title="Criar conta" onClick={handleSignIn} />
        <ButtonHeader title="Entrar" onClick={handleLogin} />
      </ButtonsDivLandpageMobile>
    </ContainerMobileMenuLandpage>
  );

  const bodyLandpage = (
    <ContainerLandpage>
      <LogoLandpage src={Logo} alt="PoupaPig" />
      {isMobileScreen ? (
        <MenuIcon
          style={{
            color: theme.colors.whiteF2F,
            width: 30,
            height: 30,
          }}
          onClick={handleOpenMobileMenu}
        />
      ) : (
        <ButtonsDiv>
          <ButtonHeader title="Criar conta" />
          <ButtonHeader title="Entrar" onClick={handleLogin} />
        </ButtonsDiv>
      )}
      {showMobileMenu && MobileMenuLandpage}
    </ContainerLandpage>
  );

  const bodySignIn = (
    <ContainerLogin>
      <LogoLogin src={LogoTitulo} alt="poupapig" />
    </ContainerLogin>
  );

  const bodyDefault = (
    <ContainerDefault>
      <LogoDefault src={LogoTitulo} alt="PoupaPig" />
      <ButtonsDivDefault>
        <ButtonHeader title="Home" />
        <ButtonHeader title="Nova transação" />
        <ButtonHeader title="Meu perfil" />
        <ButtonHeader
          icon={
            <NotificationsIcon
              style={{ color: theme.colors.whiteF2F, width: 20, height: 20 }}
            />
          }
        />
      </ButtonsDivDefault>
    </ContainerDefault>
  );
  return (
    <Container>
      {type === "landpage" && bodyLandpage}
      {type === "signin" && bodySignIn}
      {type === "default" && bodyDefault}
    </Container>
  );
}
