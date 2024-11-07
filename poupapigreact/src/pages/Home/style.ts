import styled from "styled-components";
import theme from "../../styles/theme";

interface HomeStyleProps {
  $type: string;
}

export const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  min-width: 250px;
  max-width: 1800px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardFinancialControl = styled.div`
  width: 30%;
  flex-shrink: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ClientData = styled.div`
  flex-grow: 1;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  min-width: 40px;
  min-height: 145px;
  background-color: ${theme.colors.blue002};
  color: ${theme.colors.whiteF2F};
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: mixed;

  font-family: ${theme.fonts.fontOpenSans};
  font-size: 16px;
  font-weight: ${theme.fonts.fontWeight600};
`;

export const ContainerElement = styled.div<HomeStyleProps>`
  min-width: 145px;
  max-width: 145px;
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
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Icon = styled.div``;

export const MainData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Value = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 3px;
`;

export const DollarSign = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  margin-bottom: 2px;
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

  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Date = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 10px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;

export const ScrollContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 0 40px;
  scroll-behavior: smooth;
`;

export const ScrollContent = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  width: 60vw;
  flex-grow: 1;
  flex-basis: 0;
  overflow-x: scroll;
  scrollbar-width: none;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 5px;
  width: 20px;
  height: 30px;
  z-index: 2;
  flex-shrink: 0;
`;

export const ArrowLeft = styled(ArrowContainer)`
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowRight = styled(ArrowContainer)`
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoneyTipsContainer = styled.div`
  width: 100%;
  min-height: 240px;
  background-color: ${theme.colors.blue93C};
  border: 3px solid ${theme.colors.blue002};
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Image = styled.img`
  max-height: 190px;
`;

export const TitleTips = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 40px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
  max-width: 600px;
  text-align: center;
`;
