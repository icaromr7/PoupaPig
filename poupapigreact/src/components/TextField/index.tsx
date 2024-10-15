import React, { useState } from "react";
import { Container, SelectBox } from "./style";
import theme from "../../styles/theme";

interface TextFieldProps {
  placeholder: string;
  onChange?: (value: string) => void;
  value?: string;
  fixedValue?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  onChange,
  value,
  fixedValue,
}) => {
  return (
    <Container>
      <SelectBox $isFixed={!!fixedValue}>
        <textarea
          placeholder={placeholder}
          value={fixedValue || value}
          onChange={(e) => onChange && onChange(e.target.value)}
          rows={6}
          disabled={!!fixedValue}
        />
      </SelectBox>
    </Container>
  );
};

export default TextField;
