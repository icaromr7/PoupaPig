import styled from "styled-components";
import theme from "../../styles/theme";

interface HomeStyleProps {
  $type: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
`;

export const CardFinancialControl = styled.div`
  width: 300px;
  border: 3px solid pink;
`;

export const ClientData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  border: 2px solid blue;
`;

export const TitleContainer = styled.div`
  height: 40px;
  width: 145px;
  background-color: ${theme.colors.blue002};
  color: ${theme.colors.whiteF2F};
  border-radius: 20px;
  transform: rotate(270deg);

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${theme.fonts.fontOpenSans};
  font-size: 16px;
  font-weight: ${theme.fonts.fontWeight600};
`;

export const ContainerElement = styled.div<HomeStyleProps>`
  width: 145px;
  height: 145px;
  background-color: ${(props) =>
    props.$type === "in"
      ? theme.colors.greenF9F
      : props.$type === "out"
      ? theme.colors.redFFF
      : props.$type === "budget"
      ? theme.colors.orangeFFF
      : theme.colors.blueEEF};
  border: 3px solid;
  border-color: ${(props) =>
    props.$type === "in"
      ? theme.colors.green0FB
      : props.$type === "out"
      ? theme.colors.redF63
      : props.$type === "budget"
      ? theme.colors.orangeEE7
      : theme.colors.blue038};
  color: ${(props) =>
    props.$type === "in"
      ? theme.colors.green0FB
      : props.$type === "out"
      ? theme.colors.redF63
      : props.$type === "budget"
      ? theme.colors.orangeEE7
      : theme.colors.blue038};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Icon = styled.div``;

export const Value = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const DollarSign = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;

export const ValueNumber = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: ${theme.fonts.fontWeightBold};
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;

export const Date = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 10px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;

export const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;

  border: 1px solid red;

  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ArrowLeft = styled.div``;

export const ArrowRight = styled.div``;
