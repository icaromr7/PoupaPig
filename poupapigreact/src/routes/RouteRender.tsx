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
  const [type, setType] = useState<"landpage" | "signin" | "default" | "none">(
    "default"
  );

  useEffect(() => {
    console.log("screenProps?.nameScreen", screenProps?.nameScreen);
    if (screenProps?.nameScreen === "landpage") {
      setType("landpage");
      return;
    }
    if (
      screenProps?.nameScreen === "404" ||
      screenProps?.nameScreen === "sign-in"
    ) {
      setType("signin");
      return;
    }
    if (screenProps?.nameScreen === "login" || screenProps?.nameScreen === "") {
      setType("none");
      return;
    }
  }, [screenProps?.nameScreen]);

  return (
    <ContainerTotal>
      <Container>
        <Section1>
          <HeaderContainer>
            {type !== "none" && <Header type={type} />}
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
