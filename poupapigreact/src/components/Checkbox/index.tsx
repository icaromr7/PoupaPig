import React, { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
} from "./style";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={isChecked} onClick={handleCheckboxChange} />
      <Label onClick={handleCheckboxChange}>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
