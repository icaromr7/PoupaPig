// ErroLogin.tsx
import React from "react";
import { Container, ContentTitle, Title, ErrorMessage } from "./style";

interface ErroLoginProps {
  message: string;
  title?: string;
  closeToast?: () => void;
  type?: string;
}

const ErrorToast = ({ title, message, closeToast, type }: ErroLoginProps) => {
  return (
    <Container $type={type}>
      <ContentTitle $type={type}>
        <Title>{title || `Erro`}</Title>
      </ContentTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </Container>
  );
};

export default ErrorToast;
