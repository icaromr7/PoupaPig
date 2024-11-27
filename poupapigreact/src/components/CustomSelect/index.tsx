import React, { useEffect, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import {
  Container,
  SelectBox,
  Placeholder,
  RightSide,
  OptionsList,
  OptionItem,
} from "./style";
import theme from "../../styles/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ToolTipCustom from "../TooltipCustom";

interface SelectData {
  id: number;
  nome: string;
}

interface CustomSelectProps {
  name: string;
  placeholder: string;
  data: SelectData[];
  title?: string;
  error?: string;
  required?: boolean;
  fixedValue?: string;
  isEditing?: boolean;
  minus?: boolean;
  onSelect?: (option: string) => void;
  register?: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  placeholder,
  data,
  title,
  error,
  required,
  fixedValue,
  isEditing,
  minus = false,
  // onSelect,
  register,
  setValue,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    fixedValue || null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: SelectData) => {
    setSelectedOption(option.nome);
    setIsOpen(false);
    // onSelect && onSelect(option.id);
    if (minus) {
      setValue(name, option.id - 1, { shouldValidate: true });
    } else {
      setValue(name, option.id, { shouldValidate: true });
    }
  };

  useEffect(() => {
    if (fixedValue) {
      setSelectedOption(fixedValue);
      setValue(name, fixedValue);
    }
  }, [fixedValue, name, setValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={selectRef}>
      {title && <Placeholder style={{ width: 300 }}>{title}</Placeholder>}
      <SelectBox
        onClick={() =>
          fixedValue !== undefined
            ? isEditing && toggleDropdown()
            : toggleDropdown()
        }
        $isFixed={fixedValue !== undefined && !isEditing}
      >
        <Placeholder>{selectedOption || placeholder}</Placeholder>
        <RightSide>
          {error && (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <ErrorOutlineIcon
                style={{
                  cursor: "pointer",
                  color: theme.colors.redF63,
                  height: 20,
                }}
                data-tooltip-id={`tooltip-error-select-${name}`}
              />
              <ToolTipCustom
                title={error}
                id={`tooltip-error-select-${name}`}
              />
            </div>
          )}
          <KeyboardArrowDownIcon style={{ color: theme.colors.blue038 }} />
        </RightSide>
        {isOpen && (
          <OptionsList>
            {data.map((option: any, index) => (
              <OptionItem
                key={option.id}
                onClick={() => {
                  handleSelectOption(option);
                  register &&
                    register(name, { required }).onChange({
                      target: { value: option },
                    });
                }}
              >
                {option.nome}
              </OptionItem>
            ))}
          </OptionsList>
        )}
      </SelectBox>
    </Container>
  );
};

export default CustomSelect;
