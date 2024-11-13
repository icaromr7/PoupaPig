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
  width: 40vw;
  height: 70vh;
  background-color: ${theme.colors.whiteF2F};
  border: 5px solid ${theme.colors.blue002};
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 22px;
  font-weight: ${theme.fonts.fontWeightBold};
  color: ${theme.colors.blue002};
`;

export const Close = styled(CloseIcon)`
  font-size: 2rem !important;
  color: ${theme.colors.blue002};
  margin-right: 0.87rem;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  align-self: center;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 40px;

  overflow: auto;
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const Tip = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const TitleTip = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 16px;
  font-weight: ${theme.fonts.fontWeightBold};
  color: ${theme.colors.blue002};
`;

export const MessageTip = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};

  max-width: 50vw;

  text-align: justify;

  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;
`;
