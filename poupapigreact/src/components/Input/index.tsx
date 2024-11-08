import React, { useState, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

//style
import {
  Container,
  InputWrapper,
  InputField,
  Icon2Wrapper,
  TogglePasswordButton,
  ErrorDiv,
} from "./style";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import theme from "../../styles/theme";
import ToolTipCustom from "../TooltipCustom";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  error?: string;
  register?: UseFormRegister<any>;
  required?: boolean;
  customType?: "fullName" | "password" | "email";
  fixedValue?: string;
  number?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  error,
  register,
  required,
  customType,
  fixedValue,
  number = false,
  ...rest
}: InputProps) => {
  const isPasswordType = customType === "password";
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      number &&
      !/[0-9.,]/.test(event.key) &&
      event.key !== "Backspace" &&
      event.key !== "Delete" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      event.preventDefault(); // Impede a entrada de caracteres que não são permitidos
    }
  };

  return (
    <Container>
      <InputWrapper $isFixed={!!fixedValue}>
        {/* {iconApply(customType)} */}
        <InputField
          type={isPasswordType && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          readOnly={!!fixedValue}
          onKeyDown={handleKeyDown}
          {...(register && register(name, { required }))}
          {...rest}
        />
        {error !== "" && error && (
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
        {isPasswordType && !fixedValue && (
          <Icon2Wrapper>
            <TogglePasswordButton onClick={handleTogglePassword}>
              {showPassword ? (
                <VisibilityOutlinedIcon style={{ height: 20 }} />
              ) : (
                <VisibilityOffOutlinedIcon style={{ height: 20 }} />
              )}
            </TogglePasswordButton>
          </Icon2Wrapper>
        )}
      </InputWrapper>
    </Container>
  );
};

export default Input;
