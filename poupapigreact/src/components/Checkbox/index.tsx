import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import {
  Line,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
} from "./style";
import { GenericData } from "../../interfaces";

interface CheckboxSelectProps {
  name: string;
  data: GenericData[];
  setValue?: UseFormSetValue<any>;
  setInvestment: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxSelect: React.FC<CheckboxSelectProps> = ({
  name,
  data,
  setValue,
  setInvestment,
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCheckboxChange = (id: number) => {
    const newValue = id === selectedId ? null : id;
    setSelectedId(newValue);

    if (setValue) {
      setValue(name, newValue);
    }
    if (id === 2) {
      setInvestment(true);
    } else {
      setInvestment(false);
    }
  };

  return (
    <Line>
      {data.map((item) => (
        <CheckboxContainer key={item.id}>
          <HiddenCheckbox
            type="checkbox"
            checked={selectedId === item.id}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <StyledCheckbox
            checked={selectedId === item.id}
            onClick={() => handleCheckboxChange(item.id)}
          />
          <Label onClick={() => handleCheckboxChange(item.id)}>
            {item.nome}
          </Label>
        </CheckboxContainer>
      ))}
    </Line>
  );
};

export default CheckboxSelect;
