import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const NewTransactionsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NewTransactionDiv = styled.div`
  border: 5px solid ${theme.colors.blue93C};
  border-radius: 20px;
  background-color: #fff;
  width: 100%;
  height: 250px;

  display: flex;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Image = styled.img`
  height: 240px;
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 30px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const InformationField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};

  text-align: justify;
`;

export const Image2 = styled.img``;
