import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.blue002};
  padding: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    height: 300px;
    padding: 20px;
    flex-direction: column-reverse;
  }
`;

export const LogoEvicya = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LogoEvicyaImage = styled.img`
  width: 100px;
`;

export const TitleEvicya = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 10px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.whiteF2F};
`;

export const UtilInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.whiteF2F};
`;

export const LogoPoupaPig = styled.img``;
