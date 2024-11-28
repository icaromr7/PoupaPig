import React, { useState, useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
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
  fixedValue?: GenericData;
  isEditing?: boolean;
  setValue?: UseFormSetValue<any>;
  setInvestment: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxSelect: React.FC<CheckboxSelectProps> = ({
  name,
  data,
  fixedValue,
  isEditing,
  setValue,
  setInvestment,
}) => {
  const [selectedItem, setSelectedItem] = useState<GenericData | null>(null);

  useEffect(() => {
    if (fixedValue) {
      setSelectedItem(fixedValue);
      if (setValue) {
        setValue(name, fixedValue.id);
      }
    }
  }, [fixedValue, setValue, name]);

  const handleCheckboxChange = (item: GenericData) => {
    const newValue = selectedItem?.id === item.id ? null : item;
    setSelectedItem(newValue);
    if (setValue) {
      setValue(name, newValue?.id || null);
    }
    setInvestment(item.id === 2);
  };

  return (
    <Line>
      {data.map((item) => (
        <CheckboxContainer key={item.id}>
          <HiddenCheckbox
            type="checkbox"
            checked={selectedItem?.id === item.id}
            onChange={() =>
              fixedValue !== undefined
                ? isEditing && handleCheckboxChange(item)
                : handleCheckboxChange(item)
            }
          />
          <StyledCheckbox
            checked={selectedItem?.id === item.id}
            onClick={() =>
              fixedValue !== undefined
                ? isEditing && handleCheckboxChange(item)
                : handleCheckboxChange(item)
            }
            $fixed={fixedValue !== undefined && !isEditing}
          />
          <Label
            onClick={() =>
              fixedValue !== undefined
                ? isEditing && handleCheckboxChange(item)
                : handleCheckboxChange(item)
            }
          >
            {item.nome}
          </Label>
        </CheckboxContainer>
      ))}
    </Line>
  );
};

export default CheckboxSelect;
