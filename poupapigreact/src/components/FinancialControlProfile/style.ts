import styled from "styled-components";
import theme from "../../styles/theme";

interface RgbStyleProps {
  r?: number;
  g?: number;
  b?: number;
}

interface HexStyleProps {
  $hex: RgbStyleProps;
}

export const Container = styled.div<HexStyleProps>`
  width: 100%;
  height: 830px;
  border: 5px solid
    ${(props) => `rgba(${props.$hex.r}, ${props.$hex.g},${props.$hex.b})`};
  padding: 15px;
  border-radius: 20px;

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

export const ResumeContainer = styled.div<HexStyleProps>`
  background-color: ${(props) =>
    `rgba(${props.$hex.r}, ${props.$hex.g},${props.$hex.b}, 0.8)`};
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
  text-align: center;
`;

export const ValueContainer = styled.div<HexStyleProps>`
  width: 100%;
  height: fit-content;
  border: 3px solid
    ${(props) => `rgba(${props.$hex.r}, ${props.$hex.g},${props.$hex.b})`};
  border-radius: 20px;
  background-color: ${(props) =>
    `rgba(${props.$hex.r}, ${props.$hex.g},${props.$hex.b}, 0.3)`};
  color: ${(props) => `rgba(${props.$hex.r}, ${props.$hex.g},${props.$hex.b})`};
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
