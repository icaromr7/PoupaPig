import styled from "styled-components";
import theme from "../styles/theme";

interface RoutesStyleProps {
  $isLandpage?: boolean;
}

export const ContainerTotal = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex: 4;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 1000px) {
    overflow-y: visible;
  }
`;

export const Section1 = styled.div`
  top: 0;
`;

export const HeaderContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BodyMain = styled.div<RoutesStyleProps>`
  flex: 1; /* Faz com que o BodyMain ocupe todo o espaço disponível */
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.$isLandpage ? "" : "20px 50px")};
`;

export const Section3 = styled.div`
  @media (max-width: 940px) {
    max-width: 100%;
  }
`;
