import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  height: 830px;
  border: 5px solid ${theme.colors.greenBFF};
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const ResumeContainer = styled.div`
  background-color: ${theme.colors.greenBFF};
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  padding: 10px;
`;

export const SituationMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100px;
`;

export const Message = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const ValueContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 3px solid ${theme.colors.redF63};
  border-radius: 20px;
  background-color: ${theme.colors.redF3A};
  color: ${theme.colors.redF63};
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Value = styled.div`
  display: flex;
  gap: 3px;
  align-items: flex-start;
`;

export const DollarSign = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 25px;
  font-weight: ${theme.fonts.fontWeightMedium};
`;

export const ValueNumber = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 40px;
  font-weight: ${theme.fonts.fontWeightBold};
`;

export const TypeValue = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;
