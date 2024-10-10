import React, { useState } from "react";
import {
  Container,
  NewTransactionsField,
  NewTransactionDiv,
  Image,
  Title,
  InformationField,
  Text,
  Image2,
} from "./style";

import NewTransaction1 from "../../assets/svg/newtransaction1.svg";
import NewTransaction2 from "../../assets/svg/newtransaction2.svg";
import NewTransaction3 from "../../assets/svg/newtransaction3.svg";
import NewTransaction4 from "../../assets/svg/newtransaction4.svg";

export function NewTransaction() {
  return (
    <Container>
      <NewTransactionsField>
        <NewTransactionDiv>
          <Image src={NewTransaction1} alt="PoupaPig" />
          <Title>
            cadastrar <span style={{ fontSize: 30 }}>entrada/saída</span>
          </Title>
        </NewTransactionDiv>
        <NewTransactionDiv>
          <Title>
            cadastrar <span style={{ fontSize: 30 }}>investimento</span>
          </Title>
          <Image src={NewTransaction2} alt="PoupaPig" />
        </NewTransactionDiv>
        <NewTransactionDiv>
          <Image src={NewTransaction3} alt="PoupaPig" />
          <Title>
            cadastrar <span style={{ fontSize: 30 }}>categoria</span>
          </Title>
        </NewTransactionDiv>
      </NewTransactionsField>
      <InformationField>
        <Title>Comece a controlar o seu dinheiro!</Title>
        <Text>
          Crie um novo cadastro e passe a ter controle total do seu dinheiro! Ao
          registrar suas transações e categorias, tudo será salvo com segurança
          no seu perfil, disponível para consulta a qualquer momento. E o
          melhor: cada novo cadastro contribui para uma análise mais precisa do
          seu perfil de gastos.
        </Text>
        <Image2 src={NewTransaction4} alt="PoupaPig" />
      </InformationField>
    </Container>
  );
}
