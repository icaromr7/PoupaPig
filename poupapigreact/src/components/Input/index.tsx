import React, { useState, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

//style
import {
  Container,
  InputWrapper,
  InputField,
  Icon2Wrapper,
  TogglePasswordButton,
  ErrorMessage,
  IconWrapper,
  ErrorDiv,
} from "./style";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { FiAlertCircle } from "react-icons/fi";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import theme from "../../styles/theme";
import ToolTipCustom from "../TooltipCustom";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  error?: string;
  register?: UseFormRegister<any>; // Tipagem do register
  required?: boolean;
  customType?: "fullName" | "password" | "email";
  fixedValue?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  error,
  register,
  required,
  customType,
  fixedValue,
  ...rest
}: InputProps) => {
  const isPasswordType = customType === "password";
  const [inputValue, setInputValue] = useState(fixedValue || "");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const iconApply = (typeIcon?: string) => {
    switch (typeIcon) {
      case "password":
        return <LockOutlinedIcon />;
      case "email":
        return <EmailOutlinedIcon />;
      default:
        return null;
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
          {...(register && register(name, { required }))}
          {...rest}
        />
        {error !== "" && error && (
          <ErrorDiv>
            <FiAlertCircle
              color="#c00"
              size={30}
              style={{ cursor: "pointer" }}
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
