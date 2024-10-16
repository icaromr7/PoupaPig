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

export const Content = styled.div`
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
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
`;

export const ButtonCard = styled.div`
  border: 3px solid;
  border-radius: 20px;
  height: 100px;
  background-color: ${theme.colors.whiteF2F};
  padding: 10px;

  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const RoundIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleButtonCard = styled.div`
  max-width: 120px;
  text-align: center;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 18px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const TitleSentiment = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const ButtonSentiment = styled.div`
  border: 2px solid;
  height: 60px;
  border-radius: 30px;
  padding: 10px;
  min-width: 280px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Icon = styled.img`
  height: 30px;
`;

export const NameSentiment = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 16px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  gap: 10px;
`;
