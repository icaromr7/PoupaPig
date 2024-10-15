import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const MainColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Image = styled.img`
  height: 170px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleInformation = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 30px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const TextInformation = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: justify;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Symbol = styled.div``;
