import React from "react";
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "./style";

const DataTable: React.FC = () => {
  const data = [
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
    { valor: "R$2.000,00", data: "10/01/2024", descricao: "Investimento" },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Valor</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.valor}</TableCell>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
