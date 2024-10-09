import React, { useState } from "react";
import {
  Container,
  Overlay,
  Header,
  Title,
  Close,
  Body,
  Footer,
} from "./style";
import { Button } from "../Button";

interface CustomModalProps {
  title?: string;
  body?: React.ReactNode;
  titleButtonCancel: string;
  titleButtonGo: string;
  onClose: () => void;
}

export function CustomModal({
  title,
  body,
  titleButtonCancel,
  titleButtonGo,
  onClose,
}: CustomModalProps) {
  return (
    <Overlay>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose} />
        </Header>
        <Body>{body}</Body>
        <Footer>
          <Button title={titleButtonCancel} />
          <Button title={titleButtonGo} />
        </Footer>
      </Container>
    </Overlay>
  );
}
