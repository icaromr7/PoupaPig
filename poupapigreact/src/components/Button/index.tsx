import React from "react";

import { Container } from "./style";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  height?: string;
  minWidth?: string;
  fontSize?: string;
}

export function Button({
  title,
  backgroundColor,
  borderColor,
  height,
  minWidth,
  fontSize,
}: ButtonProps) {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $height={height}
      $minWidth={minWidth}
      $fontSize={fontSize}
    >
      {title}
    </Container>
  );
}
