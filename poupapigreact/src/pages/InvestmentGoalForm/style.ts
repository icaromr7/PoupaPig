import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 30px;
  font-weight: ${theme.fonts.fontWeightBold};
  color: ${theme.colors.blue002};

  transform: rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

export const FormRegister = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.div`
  display: flex;
  gap: 10px;
`;

export const FormRegisterRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
