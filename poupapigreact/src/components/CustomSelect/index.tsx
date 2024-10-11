import React, { useState } from "react";

//style, icons e assets
import {
  Container,
  SelectBox,
  Placeholder,
  OptionsList,
  OptionItem,
} from "./style";
import theme from "../../styles/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CustomSelectProps {
  placeholder: string;
  data: string[];
  onSelect: (option: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  placeholder,
  data,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <Container>
      <SelectBox onClick={toggleDropdown}>
        <Placeholder>{selectedOption || placeholder}</Placeholder>
        <KeyboardArrowDownIcon style={{ color: theme.colors.blue038 }} />
      </SelectBox>
      {isOpen && (
        <OptionsList>
          {data.map((option, index) => (
            <OptionItem key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </Container>
  );
};

export default CustomSelect;
