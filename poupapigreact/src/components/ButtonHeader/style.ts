import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  height: 100%;
  width: fit-content;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  @media (min-width: 800px) {
    &:hover {
      background-color: #031b34;
    }
  }
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.whiteF2F};
`;

export const Icon = styled.div``;
