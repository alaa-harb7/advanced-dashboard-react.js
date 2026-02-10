import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <DataGrid checkboxSelection rows={rows} columns={columns} />
    </Box>
  );
}
