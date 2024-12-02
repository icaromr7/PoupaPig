import styled from "styled-components";
import theme from "../../styles/theme";

interface CategorySpendingStyleProps {
  $spent?: string;
}

export const Category = styled.div`
  max-height: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;

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

export const ContainerCategory = styled.div`
  background-color: ${theme.colors.greenBFF};
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const ValueSpentLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 80%;
`;

export const ValueSpent = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.green0FB};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightMedium};
`;

export const LoadingBar = styled.div<CategorySpendingStyleProps>`
  width: ${(props) =>
    props.$spent ? `calc(100% - ${props.$spent}%)` : "100%"};
  border: 3px solid #d9d9d9;
`;
export const TotalCategory = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.black171};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;

export const LoadingBarDiv = styled.div`
  display: flex;
  flex-direction: table-row;
  gap: 0px;
  width: 100%;
`;

export const SpentLine = styled.div<CategorySpendingStyleProps>`
  width: ${(props) => (props.$spent ? `${props.$spent}% ` : "0%")};
  border: 3px solid ${theme.colors.blue002};
`;
