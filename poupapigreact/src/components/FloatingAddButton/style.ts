import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 3px solid ${theme.colors.green065};
  background-color: ${theme.colors.greenAEC};

  position: fixed;
  bottom: 50px;
  right: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;
