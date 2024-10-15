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
  display: flex;
  gap: 10px;
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

export const ValueInvestment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleInvestment = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const Values = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const ValueDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${theme.colors.blue038};
  border: 3px solid ${theme.colors.blue038};
  border-radius: 20px;
  padding: 5px;
`;

export const DollarSign = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 25px;
  font-weight: ${theme.fonts.fontWeight600};
`;

export const InvestmentValue = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 40px;
  font-weight: ${theme.fonts.fontWeightBold};
`;

export const Situation = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeight600};
`;
