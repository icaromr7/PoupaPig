import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

//style, icons, assets
import "react-datepicker/dist/react-datepicker.css";
import { Container, SelectBox, DatePickerContainer, ErrorDiv } from "./style";
import theme from "../../styles/theme";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ToolTipCustom from "../TooltipCustom";

interface CustomSelectDateProps {
  placeholder: string;
  name: string;
  register?: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  error?: string;
  required?: boolean;
  fixedValue?: string;
  isEditing?: boolean;
}

const CustomSelectDate: React.FC<CustomSelectDateProps> = ({
  placeholder,
  name,
  register,
  setValue,
  error,
  required,
  fixedValue,
  isEditing,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fixedValue) {
      const defaultDate = new Date(fixedValue);
      setSelectedDate(defaultDate);
      setValue(name, defaultDate);
    }
  }, [fixedValue, name, setValue]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setIsOpen(false);
    if (date) {
      setValue(name, date);
    }
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

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
      <SelectBox
        onClick={() =>
          fixedValue !== undefined
            ? isEditing && toggleCalendar()
            : toggleCalendar()
        }
        $isFixed={fixedValue !== undefined && !isEditing}
      >
        <span>
          {selectedDate ? selectedDate.toLocaleDateString() : placeholder}
        </span>
        <KeyboardArrowDownIcon style={{ color: theme.colors.blue038 }} />
        {error && (
          <ErrorDiv>
            <ErrorOutlineIcon
              style={{
                cursor: "pointer",
                color: theme.colors.redF63,
                height: 20,
              }}
              className="error-circle"
              data-tooltip-id={`tooltip-error-input-${name}`}
            />
            <ToolTipCustom title={error} id={`tooltip-error-input-${name}`} />
          </ErrorDiv>
        )}
      </SelectBox>

      {isOpen && (
        <DatePickerContainer>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
        </DatePickerContainer>
      )}
    </Container>
  );
};

export default CustomSelectDate;
