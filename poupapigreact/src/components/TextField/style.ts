import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  width: 100%;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
`;

export const SelectBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
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
    font-size: 14px;
    font-family: ${theme.fonts.fontOpenSans};
    resize: none;
  }
`;
