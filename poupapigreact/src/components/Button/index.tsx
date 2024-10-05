import React from "react";

import { Container } from "./style";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  height?: string;
  minWidth?: string;
  fontSize?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  title,
  backgroundColor,
  borderColor,
  height,
  minWidth,
  fontSize,
  onClick,
}: ButtonProps) {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Container
      onClick={handleClick}
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
