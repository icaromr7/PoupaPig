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
  const [type, setType] = useState<"landpage" | "login" | "default">("default");

  useEffect(() => {
    console.log("screenProps?.nameScreen", screenProps?.nameScreen);
    if (screenProps?.nameScreen === "landpage") {
      setType("landpage");
      return;
    }
    if (
      screenProps?.nameScreen === "404" ||
      screenProps?.nameScreen === "login" ||
      screenProps?.nameScreen === "sign-in"
    ) {
      setType("login");
      return;
    }
  }, [screenProps?.nameScreen]);

  return (
    <ContainerTotal>
      <Container>
        <Section1>
          <HeaderContainer>
            <Header type={type} />
          </HeaderContainer>
        </Section1>
        <BodyMain $isLandpage={screenProps?.nameScreen === "landpage"}>
          {" "}
          <Component {...rest} />{" "}
        </BodyMain>
        <Section3>
          <Footer />
        </Section3>
      </Container>
    </ContainerTotal>
  );
};

export default RouteRender;
