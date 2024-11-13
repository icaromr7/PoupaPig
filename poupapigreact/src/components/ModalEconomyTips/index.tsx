import React from "react";
import {
  Container,
  Overlay,
  Header,
  Title,
  Close,
  Body,
  Footer,
  Tip,
  Line,
  Icon,
  TitleTip,
  MessageTip,
} from "./style";
import theme from "../../styles/theme";
import IconePig from "../../assets/svg/iconepig.svg";

import { Button } from "../Button";

interface ModalEconomyTipsProps {
  onClose: () => void;
}

export function ModalEconomyTips({ onClose }: ModalEconomyTipsProps) {
  return (
    <Overlay>
      <Container>
        <Header>
          <Title>Dicas de economia</Title>
          <Close onClick={onClose} />
        </Header>
        <Body>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>Anote seus gastos diariamente</TitleTip>
            </Line>
            <MessageTip>
              Usando o PoupaPig, sempre que fizer uma compra, a registre no
              sistema para entender para onde seu dinheiro está indo. Assim,
              você consegue identificar gastos desnecessários e cortar despesas
              pequenas que somam no fim do mês.
            </MessageTip>
          </Tip>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>Anote seus gastos diariamente</TitleTip>
            </Line>
            <MessageTip>
              Usando o PoupaPig, sempre que fizer uma compra, a registre no
              sistema para entender para onde seu dinheiro está indo. Assim,
              você consegue identificar gastos desnecessários e cortar despesas
              pequenas que somam no fim do mês.
            </MessageTip>
          </Tip>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>Estabeleça metas de economia</TitleTip>
            </Line>
            <MessageTip>
              Defina um valor específico para guardar todo mês e trate isso como
              uma "conta" que precisa ser paga. No poupaPig, você pode fazer
              isso em investimentos/metas.
            </MessageTip>
          </Tip>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>Use listas de compras</TitleTip>
            </Line>
            <MessageTip>
              Antes de ir ao mercado, faça uma lista do que realmente precisa
              comprar e evite levar produtos desnecessários.
            </MessageTip>
          </Tip>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>
                Reduza os gastos com assinaturas desnecessárias
              </TitleTip>
            </Line>
            <MessageTip>
              Verifique se todas as suas assinaturas e serviços mensais são
              realmente utilizados. Cancele o que não faz diferença.
            </MessageTip>
          </Tip>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>Compare preços antes de comprar</TitleTip>
            </Line>
            <MessageTip>
              Use aplicativos e sites para comparar preços, especialmente em
              compras maiores ou frequentes.
            </MessageTip>
          </Tip>
          <Tip>
            <Line>
              <Icon src={IconePig} alt="PoupaPig" />
              <TitleTip>
                Evite empréstimos e financiamentos com juros altos
              </TitleTip>
            </Line>
            <MessageTip>
              Só recorra a empréstimos ou financiamentos se realmente necessário
              e procure as opções com os menores juros.
            </MessageTip>
          </Tip>
        </Body>
        <Footer>
          <Button title="Fechar" onClick={onClose} />
        </Footer>
      </Container>
    </Overlay>
  );
}
