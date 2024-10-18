import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  align-items: center;
  gap: 40px;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const IconDiv = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const TitleIconDiv = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const LineIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: end;
  align-self: flex-end;
  gap: 10px;
`;
