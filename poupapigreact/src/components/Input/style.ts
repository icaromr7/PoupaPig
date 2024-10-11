import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
