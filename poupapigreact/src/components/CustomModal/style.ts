import styled from "styled-components";
import theme from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    align-items: end;
  }
`;

export const Container = styled.div`
  min-width: 200px;
  max-width: 500px;
  height: 220px;
  background-color: ${theme.colors.whiteF2F};
  border: 5px solid ${theme.colors.blue002};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 30px;
  align-self: flex-end;
`;

export const Title = styled.div``;

export const Close = styled(CloseIcon)`
  font-size: 2rem !important;
  color: ${theme.colors.blue002};
  margin-right: 0.87rem;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 80%;
  align-self: center;
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 10px;
`;
