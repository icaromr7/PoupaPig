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
  height: 40px;
  border-radius: 20px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 14px;
  }
`;

/* Estilização adicional para o calendário */
export const CalendarWrapper = styled.div`
  position: absolute;
  top: 50px; /* Ajuste conforme necessário */
  z-index: 2;
  background-color: ${theme.colors.blueE5F};
  border: 3px solid ${theme.colors.blue038};
  border-radius: 10px;
`;
