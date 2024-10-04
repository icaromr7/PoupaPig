import styled from "styled-components";
import theme from "../../styles/theme";

interface ButtonStyleProps {
  $backgroundColor?: string;
  $borderColor?: string;
  $height?: string;
  $minWidth?: string;
  $fontSize?: string;
}

export const Container = styled.div<ButtonStyleProps>`
  width: ${(props) => (props.$minWidth ? props.$minWidth : "170px")};
  height: ${(props) => (props.$height ? props.$height : "40px")};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : theme.colors.greenAEC};
  border: ${(props) =>
    props.$borderColor
      ? `5px solid ${props.$borderColor}`
      : `5px solid ${theme.colors.green065}`};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${theme.fonts.fontMontserrat};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "12px")};
  color: ${(props) =>
    props.$borderColor ? props.$borderColor : theme.colors.green065};
  font-weight: ${theme.fonts.fontWeightBold};

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;
