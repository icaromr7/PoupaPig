import styled from "styled-components";
import theme from "../../styles/theme";

interface TextAreaStyleProps {
  $isFixed?: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
`;

export const SelectBox = styled.div<TextAreaStyleProps>`
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${({ $isFixed }) =>
    $isFixed ? theme.colors.whiteF2F : theme.colors.blueE5F};
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: text;

  textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: ${theme.fonts.fontOpenSans};
    font-size: 14px;
    font-weight: ${theme.fonts.fontWeightRegular};
    color: ${theme.colors.blue002};
    resize: none;
  }
`;
