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
  Image,
  TextDivOne,
  BackgroundOne,
  TextOne,
  BackgroundTwo,
  ImageDouble,
  TextTwo,
  TextDivTwo,
} from "./style";
import LogoOficial from "../../assets/svg/logooficial.svg";
import Landpage1 from "../../assets/svg/landpage1.svg";
import Landpage2 from "../../assets/svg/landpage2.svg";
import Landpage3 from "../../assets/svg/landpage3.svg";
import Blob1 from "../../assets/svg/blob1.svg";
import Blob2 from "../../assets/svg/blob2.svg";

export function Landpage() {
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
        <Image src={Landpage1} alt="PoupaPig" />
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
          <TextTwo style={{ top: 120 }}>
            Aqui você pode se organizar e planejar suas finanças com facilidade.
            Quer realizar o sonho de abrir um negócio, comprar sua casa própria,
            adquirir um carro novo ou até mesmo transformar seu visual? O
            poupaPig te ajuda com tudo isso! Comece a organizar suas finanças
            agora mesmo!
          </TextTwo>
        </TextDivTwo>
        <ImageDouble src={Landpage2} alt="PoupaPig" />
      </Section>
    </Container>
  );
}
