import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { UseFormRegister, FieldValues } from "react-hook-form";

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
  error?: string;
  required?: boolean;
}

const CustomSelectDate: React.FC<CustomSelectDateProps> = ({
  placeholder,
  name,
  register,
  error,
  required,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setIsOpen(false);
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
      <SelectBox onClick={toggleCalendar}>
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
            onChange={(date) => {
              handleDateChange(date);
              if (register) {
                register(name, { required });
              }
            }}
            inline
          />
        </DatePickerContainer>
      )}
    </Container>
  );
};

export default CustomSelectDate;
