import React, { useEffect } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
} from "./style";

interface CheckboxProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  register?: UseFormRegister<any>;
  setValue?: UseFormSetValue<any>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked = false,
  onChange,
  register,
  setValue,
}) => {
  // Se `setValue` estiver presente, garante que o valor esteja sincronizado com o formulário
  useEffect(() => {
    if (setValue) {
      setValue(name, checked);
    }
  }, [checked, name, setValue]);

  const handleCheckboxChange = () => {
    onChange(!checked);
    if (setValue) {
      setValue(name, !checked); // Atualiza o valor do formulário
    }
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={handleCheckboxChange}
        {...(register && register(name))}
      />
      <StyledCheckbox checked={checked} onClick={handleCheckboxChange} />
      <Label onClick={handleCheckboxChange}>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
