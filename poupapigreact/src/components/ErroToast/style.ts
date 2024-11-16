import styled from "styled-components";
import theme from "../../styles/theme";

interface Props {
  $type?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background: ${({ $type }) =>
    $type === "success" ? theme.colors.greenBFF : theme.colors.redF3A};
`;

export const ContentTitle = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ $type }) =>
    $type === "success" ? theme.colors.greenBFF : theme.colors.redF3A};
`;

export const Title = styled.div`
  color: ${theme.colors.whiteF2F};
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  padding: 8px 14px 8px;
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.whiteF2F};
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 14px 14px;
`;
