import React, { useState } from "react";

//style, icons e assets
import {
  Container,
  LandpageHeader,
  MainLogo,
  Logo,
  Subtitle,
  SubtitleSecond,
  Section,
  ImageOne,
  TextDivOne,
  BackgroundOne,
  TextOne,
  BackgroundTwo,
  ImageTwo,
  TextTwo,
  TextDivTwo,
  IconDivInfo,
  ContainerInfo,
  TextInfo,
  SectionColumn,
  Text,
  LineInfo,
  ImageThree,
} from "./style";
import theme from "../../styles/theme";
import LogoOficial from "../../assets/svg/logooficial.svg";
import Landpage1 from "../../assets/svg/landpage1.svg";
import Landpage2 from "../../assets/svg/landpage2.svg";
import Landpage3 from "../../assets/svg/landpage3.svg";
import Blob1 from "../../assets/svg/blob1.svg";
import Blob2 from "../../assets/svg/blob2.svg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Button } from "../../components/Button";

export function Landpage() {
  const cardInfo = (
    type: "control" | "money" | "investment" | "calculus",
    text: string
  ) => {
    const iconsDiv =
      type === "control" ? (
        <IconDivInfo>
          <ArrowUpwardIcon
            style={{ color: theme.colors.redF63, height: 35, width: 35 }}
          />
          <ArrowDownwardIcon
            style={{ color: theme.colors.green0FB, height: 35, width: 35 }}
          />
        </IconDivInfo>
      ) : type === "money" ? (
        <AttachMoneyIcon
          style={{ color: theme.colors.green065, height: 35, width: 35 }}
        />
      ) : type === "investment" ? (
        <TrendingUpIcon
          style={{ color: theme.colors.greenAEC, height: 35, width: 35 }}
        />
      ) : (
        <CalculateIcon
          style={{ color: theme.colors.orangeEE7, height: 35, width: 35 }}
        />
      );

    return (
      <ContainerInfo>
        {iconsDiv}
        <TextInfo>{text}</TextInfo>
      </ContainerInfo>
    );
  };

  return (
    <Container>
      <LandpageHeader>
        <MainLogo>
          <Logo src={LogoOficial} alt="Poupa Pig" />
          <Subtitle>Engorde seu porquinho</Subtitle>
        </MainLogo>
        <SubtitleSecond>
          Seu dinheiro, seu futuro. Tudo na palma da sua mão.
        </SubtitleSecond>
      </LandpageHeader>
      <Section>
        <ImageOne src={Landpage1} alt="PoupaPig" />
        <TextDivOne>
          <BackgroundOne src={Blob1} alt="PoupaPig" />
          <TextOne>
            Quer organizar suas finanças de forma descomplicada? O poupaPig é
            ideal para você. Controle suas despesas, planeje suas economias e
            construa um futuro melhor, tudo de maneira simples e acessível. Crie
            sua conta agora e comece a transformar sua vida financeira.
          </TextOne>
        </TextDivOne>
      </Section>
      <Section>
        <TextDivTwo>
          <BackgroundTwo src={Blob2} alt="PoupaPig" />
          <TextTwo>
            Aqui você pode se organizar e planejar suas finanças com facilidade.
            Quer realizar o sonho de abrir um negócio, comprar sua casa própria,
            adquirir um carro novo ou até mesmo transformar seu visual? O
            poupaPig te ajuda com tudo isso! Comece a organizar suas finanças
            agora mesmo!
          </TextTwo>
        </TextDivTwo>
        <ImageTwo src={Landpage2} alt="PoupaPig" />
      </Section>
      <SectionColumn>
        <Text>Com o poupaPig você consegue....</Text>
        <LineInfo>
          {cardInfo("control", "Manter o controle de entradas e saídas")}
          {cardInfo("money", "Criar categorias e limitar valores de gastos")}
          {cardInfo(
            "investment",
            "Criar metas e investimentos para manter controle"
          )}
          {cardInfo("calculus", "Entender melhor a sua situação financeira")}
        </LineInfo>
      </SectionColumn>
      <Section>
        <ImageThree src={Landpage3} alt="PopuaPig" />
        <SectionColumn>
          <Text>
            Venha ter poder sobre o seu próprio dinheiro, crie sua conta no
            piggyBuddget agora!
          </Text>
          <Button
            title="Criar conta"
            height="80px"
            minWidth="300px"
            fontSize="25px"
          />
        </SectionColumn>
      </Section>
    </Container>
  );
}
