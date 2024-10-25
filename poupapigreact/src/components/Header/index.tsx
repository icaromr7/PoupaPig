import React, { useEffect, useRef, useState } from "react";
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
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderMenu } from "../HeaderMenu";

interface HeaderProps {
  type: "landpage" | "signin" | "default" | "profile";
}

export function Header({ type }: HeaderProps) {
  const isMobileScreen = useMobileScreen();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpenMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleNewTransaction = () => {
    navigate("/new-transaction");
  };

  const handleProfile = () => {
    navigate("/profile");
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
          <ButtonHeader title="Criar conta" onClick={handleSignIn} />
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

  const handleConfigMenu = () => {
    setShowConfig(!showConfig);
    setShowNotifications(false);
  };

  const handleNotificationMenu = () => {
    setShowNotifications(!showNotifications);
    setShowConfig(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
        setShowConfig(false);
      }
    };

    if (showNotifications || showConfig) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications, showConfig]);

  const bodyDefault = (
    <ContainerDefault>
      <LogoDefault src={LogoTitulo} alt="PoupaPig" />
      <ButtonsDivDefault>
        <ButtonHeader title="Home" onClick={handleHome} />
        <ButtonHeader title="Nova transação" onClick={handleNewTransaction} />
        <ButtonHeader title="Meu perfil" onClick={handleProfile} />
        {type === "profile" ? (
          <ButtonHeader
            icon={
              <SettingsIcon
                style={{ color: theme.colors.whiteF2F, width: 20, height: 20 }}
              />
            }
            onClick={handleConfigMenu}
          />
        ) : (
          <ButtonHeader />
        )}
        <ButtonHeader
          icon={
            <NotificationsIcon
              style={{ color: theme.colors.whiteF2F, width: 20, height: 20 }}
            />
          }
          onClick={handleNotificationMenu}
        />
      </ButtonsDivDefault>
    </ContainerDefault>
  );
  return (
    <Container>
      {type === "landpage" && bodyLandpage}
      {type === "signin" && bodySignIn}
      {(type === "default" || type === "profile") && bodyDefault}
      {showNotifications && (
        <div ref={menuRef}>
          <HeaderMenu notification />
        </div>
      )}
      {showConfig && (
        <div ref={menuRef}>
          <HeaderMenu config />
        </div>
      )}
    </Container>
  );
}
