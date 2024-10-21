import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardFinancialControl = styled.div`
  width: 300px;
  height: 830px;
  border: 3px solid pink;
`;

export const ClientData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
`;

export const Row = styled.div`
  max-width: 1150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const BenefitContainer = styled.div`
  height: 180px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TextBenefit = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const ContainerBenefits = styled.div`
  min-width: 230px;
  height: 180px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBenefit = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeight600};
  color: ${theme.colors.blue002};
`;

export const NameBenefit = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};

  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 360px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${theme.colors.greenAEC};
  z-index: 1;
`;

export const TableRow = styled.tr<{ even: boolean }>`
  height: 30px;
  background-color: ${({ even }) =>
    even ? "rgba(174, 207, 159, 0.5)" : "rgba(191, 243, 167, 0.5)"};
`;

export const TableCell = styled.td`
  padding: 5px;
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.black171};
  font-size: 15px;
`;

export const HeaderCell = styled.th`
  padding: 5px;
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.black171};
  font-size: 15px;
`;

export const IconCell = styled.td`
  text-align: center;
`;
