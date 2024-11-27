import React from "react";
import { Container, SelectBox, ErrorDiv } from "./style";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import theme from "../../styles/theme";
import { UseFormRegister } from "react-hook-form";
import ToolTipCustom from "../TooltipCustom";

interface TextFieldProps {
  name: string;
  placeholder: string;
  value?: string;
  fixedValue?: string;
  error?: string;
  isEditing?: boolean;
  register?: UseFormRegister<any>;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  placeholder,
  value,
  fixedValue,
  error,
  isEditing,
  register,
  ...rest
}) => {
  return (
    <Container>
      <SelectBox $isFixed={fixedValue !== undefined && !isEditing}>
        <textarea
          placeholder={placeholder}
          value={fixedValue && !isEditing ? fixedValue.toString() : undefined}
          rows={6}
          disabled={fixedValue !== undefined && !isEditing}
          {...(register && register(name))}
          {...rest}
        />
      </SelectBox>
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
    </Container>
  );
};

export default TextField;
