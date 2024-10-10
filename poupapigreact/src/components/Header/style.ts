import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;

  position: relative;
`;

export const ContainerLandpage = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.blue002};
  padding: 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const LogoLandpage = styled.img`
  width: 40px;
`;

export const ButtonsDiv = styled.div`
  height: 100%;
  display: flex;
  gap: 60px;
  flex-direction: row;
`;

export const ContainerLogin = styled.div`
  width: 50%;
  height: 100px;
  background-color: ${theme.colors.blue002};
  padding: 50px;
  margin-left: auto;
  margin-top: 15px;
  border-radius: 50px 0 0 50px;

  display: flex;
  align-items: center;
`;

export const LogoLogin = styled.img`
  width: 300px;
`;

export const ContainerDefault = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.blue002};
  padding: 0 50px;

  margin-top: 15px;
  margin-left: 50px;

  border-radius: 50px 0 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDefault = styled.img`
  width: 150px;
`;

export const ButtonsDivDefault = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

export const ContainerMobileMenuLandpage = styled.div`
  width: 120px;
  background-color: ${theme.colors.blue002};
  border-radius: 20px;

  position: absolute;
  top: 70px;
  right: 20px;
`;

export const ButtonsDivLandpageMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
