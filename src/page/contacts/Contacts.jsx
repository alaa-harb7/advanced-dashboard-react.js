import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid showToolbar rows={rows} columns={columns} />
    </Box>
  );
}
