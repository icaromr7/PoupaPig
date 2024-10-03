import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  background: linear-gradient(
    to bottom,
    ${theme.colors.whiteF2F} 40%,
    ${theme.colors.blue93C} 100%
  );
  padding: 20px 50px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const LandpageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const MainLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img``;

export const Subtitle = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 17px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue468};
`;

export const SubtitleSecond = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 17px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Image = styled.img`
  width: 500px;

  @media (max-width: 800px) {
    width: 400px;
  }
`;

export const TextDivOne = styled.div`
  position: relative;
`;

export const BackgroundOne = styled.img`
  width: 1000px;
  margin-right: -270px;

  @media (max-width: 800px) {
    width: 600px;
    margin-right: -180px;
  }
`;

export const TextOne = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 16px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;

  position: absolute;
  left: 120px;
  top: 80px;

  max-width: 500px;

  @media (max-width: 800px) {
    max-width: 300px;
    font-size: 14px;
    left: 100px;
    top: 30px;
  }
`;

export const BackgroundTwo = styled.img`
  width: 1000px;
  margin-left: -170px;

  @media (max-width: 800px) {
    width: 600px;
  }
`;

export const ImageDouble = styled.img`
  width: 400px;
  margin-right: -50px;
`;

export const TextTwo = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 16px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;

  position: absolute;
  top: 120px;

  max-width: 500px;

  @media (max-width: 800px) {
    max-width: 250px;
    font-size: 14px;
    top: 40px;
  }
`;

export const TextDivTwo = styled.div`
  position: relative;
`;
