import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ProfileImage = styled.div`
  height: 80px;
  min-width: 80px;
  border-radius: 20px;

  background-color: #876564;
`;

export const UserTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeTitle = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 22px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const Subtitle = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 10px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 10px;
`;

export const TopForm = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BottomForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const InputDiv = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 10px;
`;

export const TextForm = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;
