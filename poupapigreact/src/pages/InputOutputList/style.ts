import styled from "styled-components";
import theme from "../../styles/theme";

interface InputOutputListStyleProps {
  $type?: string;
}

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

export const Symbol = styled.div<InputOutputListStyleProps>`
  min-width: 40px;
  height: 40px;
  border: ${(props) =>
    props.$type === "in"
      ? `3px solid ${theme.colors.green0FB}`
      : `3px solid ${theme.colors.redF63}`};
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
