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

export const ButtonsDiv = styled.div`
  align-self: flex-end;
`;

export const Column = styled.div`
  border: 3px solid #fff;
  padding: 20px;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 340px;
  overflow-y: auto;

  /* Estiliza a barra de rolagem */
  &::-webkit-scrollbar {
    width: 0.4em; /* Ajusta a largura */
    margin-right: 10px; /* Simula espaçamento à direita */
  }

  /* Estiliza o "thumb" da barra de rolagem (a parte arrastável) */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 32, 67, 0.5);
    border-radius: 10px;
    border: 2px solid transparent; /* Adiciona espaço ao redor */
    background-clip: padding-box; /* Faz com que o espaço seja visível */
  }

  /* Estiliza a área de rolagem para uma altura menor */
  &::-webkit-scrollbar-track {
    margin-top: 10px; /* Espaço no topo da barra */
    margin-bottom: 10px; /* Espaço na parte inferior da barra */
  }
`;
