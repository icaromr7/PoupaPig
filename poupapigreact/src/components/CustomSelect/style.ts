import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  width: 100%;

  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.blue002};
`;

export const SelectBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Placeholder = styled.span`
  font-size: 12px;
`;

export const OptionsList = styled.div`
  padding: 0;
  margin: 10px 0 0;
  border: 3px solid ${theme.colors.blue038};
  border-radius: 10px;
  background-color: ${theme.colors.blueE5F};
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.blueE5F};
    border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.blue93C};
    border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.blue038};
  }

  /* Para Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.blue93C} ${theme.colors.blueE5F};
`;

export const OptionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  color: ${theme.colors.blue002};

  &:hover {
    background-color: ${theme.colors.blue93C};
    color: ${theme.colors.whiteF2F};
  }
`;
