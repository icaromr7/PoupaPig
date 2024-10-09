import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: fit-content;
  max-width: 300px;
  background-color: ${theme.colors.whiteF2F};
  border: 3px solid ${theme.colors.blue002};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: absolute;
  right: 60px;
  top: 90px;
`;

export const Line = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
  padding: 0 10px;

  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  border-radius: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.blue038};
  }
`;

export const TextObservation = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 9px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
  text-decoration-line: underline;
  cursor: pointer;
`;
