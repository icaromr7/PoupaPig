import React, { useEffect, useState } from "react";
import {
  ContainerTotal,
  Container,
  Section1,
  HeaderContainer,
  BodyMain,
  Section3,
} from "./style";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useHeader } from "../context/HeaderContext";

interface RouteProperties {
  isPrivate?: boolean;
  Component: React.ComponentType;
}

interface ScreenPropertiesRouteRender {
  nameScreen: string;
}

interface RouteRenderProps extends RouteProperties {
  screenProps: ScreenPropertiesRouteRender;
}

const RouteRender: React.FC<RouteRenderProps> = ({
  isPrivate = false,
  Component,
  screenProps,
  ...rest
}) => {
  const { setHeaderType } = useHeader();
  // const [type, setType] = useState<
  //   "landpage" | "signin" | "default" | "none" | "profile"
  // >("default");

  useEffect(() => {
    const newType = (() => {
      switch (screenProps?.nameScreen) {
        case "landpage":
          return "landpage";
        case "404":
        case "sign-in":
          return "signin";
        case "profile":
        case "config-account":
          return "profile";
        case "login":
        case "":
          return "none";
        default:
          return "default";
      }
    })();

    setHeaderType(newType);
  }, [screenProps?.nameScreen, setHeaderType]);

  return (
    <ContainerTotal>
      <Container>
        <Section1>
          <HeaderContainer>
            <Header type={useHeader().headerType} />{" "}
            {/* Aqui você usa o tipo do contexto */}
          </HeaderContainer>
        </Section1>
        <BodyMain $isLandpage={screenProps?.nameScreen === "landpage"}>
          <Component {...rest} />
        </BodyMain>
        <Section3>
          <Footer />
        </Section3>
      </Container>
    </ContainerTotal>
  );
};

export default RouteRender;
