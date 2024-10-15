import React, { useState } from "react";
import DatePicker from "react-datepicker";

//style, icons, assets
import "react-datepicker/dist/react-datepicker.css";
import { Container, SelectBox, DatePickerContainer } from "./style";
import theme from "../../styles/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CustomSelectDateProps {
  placeholder: string;
  onDateChange: (date: Date | null) => void;
}

const CustomSelectDate: React.FC<CustomSelectDateProps> = ({
  placeholder,
  onDateChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setIsOpen(false);
    onDateChange(date);
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <SelectBox onClick={toggleCalendar}>
        <span>
          {selectedDate ? selectedDate.toLocaleDateString() : placeholder}
        </span>
        <KeyboardArrowDownIcon style={{ color: theme.colors.blue038 }} />
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
