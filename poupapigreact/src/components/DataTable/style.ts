import styled from "styled-components";
import theme from "../../styles/theme";

export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 20px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: ${theme.colors.blueE5F};
  // eu queria uma border 3px solid  ${theme.colors.blueE5F} aqui;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.blue038};
  // eu queria uma border 3px solid  ${theme.colors.grey6F7} aqui;
`;

export const TableCell = styled.th`
  padding: 12px;
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.blue002};
  border: 3px solid ${theme.colors.blue038};
`;

export const TableBody = styled.tbody``;

export const TableRowBody = styled.tr`
  background-color: ${theme.colors.whiteF2F};
`;

export const TableCellBody = styled.td`
  padding: 12px;
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 14px;
  color: ${theme.colors.blue002};
  border-right: 1px solid ${theme.colors.blue038};

  &:last-child {
    border-right: none;
  }
`;
