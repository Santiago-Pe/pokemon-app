// src/components/DataTable.tsx
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Pokemon {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}

interface Battle {
  id: number;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  winner: Pokemon;
}

interface DataTableProps {
  rows: Battle[];
}

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="battle table">
        <TableHead>
          <TableRow>
            <TableCell>Pokemon 1</TableCell>
            <TableCell>Pokemon 2</TableCell>
            <TableCell>Winner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((battle) => (
            <TableRow key={battle.id}>
              <TableCell>
                <img
                  src={battle.pokemon1.imageUrl}
                  alt={battle.pokemon1.name}
                  width={50}
                />
                <div>{battle.pokemon1.name}</div>
              </TableCell>
              <TableCell>
                <img
                  src={battle.pokemon2.imageUrl}
                  alt={battle.pokemon2.name}
                  width={50}
                />
                <div>{battle.pokemon2.name}</div>
              </TableCell>
              <TableCell>
                <img
                  src={battle.winner.imageUrl}
                  alt={battle.winner.name}
                  width={50}
                />
                <div>{battle.winner.name}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
