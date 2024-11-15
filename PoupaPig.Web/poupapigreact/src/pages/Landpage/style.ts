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

export const ImageOne = styled.img`
  width: 35vw;

  @media (max-width: 800px) {
    width: 400px;
  }
`;

export const TextDivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70vw;
`;

export const BackgroundOne = styled.img`
  width: 70vw;
  margin-right: -270px;

  @media (max-width: 800px) {
    width: 600px;
    margin-right: -180px;
  }
`;

export const TextOne = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;

  position: absolute;

  max-width: 500px;

  @media (max-width: 1600px) {
    font-size: 17px;
  }
  @media (max-width: 800px) {
    max-width: 300px;
    font-size: 14px;
  }
`;

export const BackgroundTwo = styled.img`
  width: 70vw;
  margin-left: -170px;

  @media (max-width: 800px) {
    width: 600px;
  }
`;

export const ImageTwo = styled.img`
  width: 35vw;
  margin-right: -50px;
`;

export const TextTwo = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;

  position: absolute;
  left: 100px;

  max-width: 500px;

  @media (max-width: 1600px) {
    font-size: 17px;
  }

  @media (max-width: 800px) {
    max-width: 300px;
    font-size: 14px;
  }
`;

export const TextDivTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70vw;
`;

export const IconDivInfo = styled.div``;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 5px solid ${theme.colors.blue038};
  background-color: ${theme.colors.whiteF2F};
  padding: 20px;
`;

export const TextInfo = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;
`;

export const SectionColumn = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 30px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;
  max-width: 800px;
`;

export const LineInfo = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageThree = styled.img`
  width: 35vw;
  margin-bottom: -20px;
`;
