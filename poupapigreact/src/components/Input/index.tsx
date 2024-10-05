import React, { useState, InputHTMLAttributes } from "react";
import {
  Container,
  InputWrapper,
  InputField,
  Icon2Wrapper,
  TogglePasswordButton,
  ErrorMessage,
  IconWrapper,
} from "./style";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  customType?: "fullName" | "password" | "email";
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  error,
  onChange,
  required,
  customType,
  ...rest
}: InputProps) => {
  const isPasswordType = customType === "password";
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    if (onChange) {
      onChange(e);
    }
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
      <InputWrapper>
        {iconApply(customType)}
        <InputField
          type={isPasswordType && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          {...rest}
        />
        {isPasswordType && (
          <Icon2Wrapper>
            <TogglePasswordButton onClick={handleTogglePassword}>
              {showPassword ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </TogglePasswordButton>
          </Icon2Wrapper>
        )}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Input;
