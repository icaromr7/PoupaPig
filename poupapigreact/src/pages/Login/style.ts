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
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  /* width: 15vw; */
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  flex-shrink: 0;
  width: 100%;
  min-width: 250px;
  max-width: 500px;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-decoration: underline;

  cursor: pointer;
`;
