import styled from "styled-components";
import theme from "../../styles/theme";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  /* Escondendo o checkbox nativo */
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  background: ${theme.colors.blueE5F};
  border: 3px solid ${theme.colors.blue038};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;
  cursor: pointer;

  &:after {
    content: "■";
    display: ${(props) => (props.checked ? "block" : "none")};
    color: ${theme.colors.blue038};
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  cursor: pointer;
`;
