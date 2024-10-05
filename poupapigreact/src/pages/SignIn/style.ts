import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  flex-shrink: 0;
  width: 100%;
  min-width: 250px;
  max-width: 1400px;

  margin-left: auto;
  margin-right: auto;

  position: relative;
`;

export const Arrow = styled.div`
  position: absolute;
  top: -115px;
  left: 0;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: flex-end;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ColumnLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 30px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const Text = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: justify;
`;

export const Image = styled.img``;

export const ColumnRight = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
    gap: 30px;
  }
`;

export const ColumnRightQuestions = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 800px) {
    width: 100%;
    gap: 30px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
