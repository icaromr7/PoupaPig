import styled from "styled-components";
import theme from "../../styles/theme";

interface Props {
  $type?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${({ $type }) =>
    $type === "success" ? theme.colors.greenBFF : theme.colors.redF3A};
`;

export const ContentTitle = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;
  background: ${({ $type }) =>
    $type === "success" ? theme.colors.greenBFF : theme.colors.redF63};
`;

export const Title = styled.div`
  color: ${theme.colors.whiteF2F};
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  padding: 8px 14px 8px;
`;

export const ErrorMessage = styled.div<Props>`
  color: ${({ $type }) =>
    $type === "success" ? theme.colors.green065 : theme.colors.redF63};
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 14px 14px;
`;
