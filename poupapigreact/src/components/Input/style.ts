import styled from "styled-components";
import theme from "../../styles/theme";

interface InputStyleProps {
  $isFixed?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-family: ${theme.fonts.fontOpenSans} !important;
  font-size: 14px !important;
  font-weight: ${theme.fonts.fontWeightRegular} !important;
  color: ${theme.colors.blue002} !important;
`;

export const InputWrapper = styled.div<InputStyleProps>`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 3px solid ${theme.colors.blue038};
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ $isFixed }) =>
    $isFixed ? theme.colors.whiteF2F : theme.colors.blueE5F};
`;

export const InputField = styled.input`
  height: 100%;
  width: 85%;
  background-color: transparent;
  border: 1px transparent;

  &::placeholder {
    color: ${theme.colors.blue002};
    font-family: ${theme.fonts.fontOpenSans};
    font-size: 12px;
    font-weight: ${theme.fonts.fontWeightRegular};
  }
`;

export const Icon2Wrapper = styled.div`
  height: 100%;
  width: 15%;
`;

export const TogglePasswordButton = styled.div``;

export const ErrorMessage = styled.div``;

export const IconWrapper = styled.div``;
