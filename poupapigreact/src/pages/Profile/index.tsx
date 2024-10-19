import React from "react";

import {
  Container,
  CardFinancialControl,
  ClientData,
  Grid,
  Row,
  BenefitContainer,
  TextBenefit,
  ContainerBenefits,
  TitleBenefit,
  NameBenefit,
} from "./style";
import { FinancialControlProfile } from "../../components/FinancialControlProfile";
import { Button } from "../../components/Button";

const cards = [
  "Visa",
  "American Express",
  "Mastercard",
  "Elo",
  "Hipercard",
  "Diners Club",
];
const banks = ["Caixa", "Bradesco", "Banco do Brasil"];
const signatures = ["Prime", "Kindle Unlimited", "Netflix", "MercadoLivre"];

export function Profile() {
  const dataBenefits = (title: string, data: string[], titleButton: string) => {
    const chunkedData = [];
    for (let i = 0; i < data.length; i += 3) {
      chunkedData.push(data.slice(i, i + 3));
    }
    return (
      <ContainerBenefits>
        <TitleBenefit>{title}</TitleBenefit>
        {chunkedData.map((group, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            {group.map((x, idx) => (
              <React.Fragment key={idx}>
                <NameBenefit>{x}</NameBenefit>
                {/* Adiciona "|" entre os itens, mas não após o último */}
                {idx < group.length - 1 && (
                  <span style={{ margin: "0 8px" }}>|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
        <Button title={titleButton} />
      </ContainerBenefits>
    );
  };
  return (
    <Container>
      <CardFinancialControl />
      <ClientData>
        <Grid style={{ gap: 50 }}>
          {dataBenefits("Suas bandeiras de cartão", cards, "Adicionar cartão")}
          {dataBenefits("Suas contas bancárias", banks, "Adicionar banco")}
          {dataBenefits("Suas assinaturas", signatures, "Adicionar assinatura")}
          <BenefitContainer>
            <TextBenefit>
              Sabia que seu cartão, banco ou assinatura recorrente pode te dar
              benefícios?
            </TextBenefit>
            <Button title="Confira seus benefícios!" />
          </BenefitContainer>
        </Grid>
      </ClientData>
    </Container>
  );
}
