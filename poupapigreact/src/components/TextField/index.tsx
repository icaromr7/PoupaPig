import React, { useState } from "react";
import { Container, SelectBox } from "./style";

interface TextFieldProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <Container>
      <SelectBox>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
        />
      </SelectBox>
    </Container>
  );
};

export default TextField;
