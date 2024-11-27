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
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  position: relative;
`;

export const FormRegisterRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 800px) {
    gap: 20px;
    width: 100%;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FirtsColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ErrorDiv = styled.div`
  position: absolute;
  right: -30px;
`;
