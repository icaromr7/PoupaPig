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
import theme from "../../styles/theme";

import { Button } from "../Button";

interface CustomModalProps {
  title?: string;
  message: React.ReactNode | string;
  titleButtonCancel: string;
  action: () => void;
  titleButtonGo: string;
  onClose: () => void;
}

export function CustomModal({
  title,
  message,
  titleButtonCancel,
  action,
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
        <Body>{message}</Body>
        <Footer>
          <Button
            title={titleButtonCancel}
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={onClose}
          />
          <Button title={titleButtonGo} onClick={action} />
        </Footer>
      </Container>
    </Overlay>
  );
}
