import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex", // علشان يوسّط رأسيًا
              alignItems: "center", // << مهم جدًا
              justifyContent: "center", // في النص أفقياً كمان
              width: "100%",
              height: "100%", // خلي البوكس ياخد ارتفاع الخلية بالكامل
            }}
          >
            <Box
              sx={{
                p: "6px 8px",
                minWidth: 100,
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                backgroundColor:
                  access === "Admin"
                    ? theme.palette.primary.dark
                    : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              }}
            >
              {access === "Admin" && (
                <AdminPanelSettingsOutlined
                  sx={{ color: "white" }}
                  fontSize="small"
                />
              )}

              {access === "Manager" && (
                <SecurityOutlined sx={{ color: "white" }} fontSize="small" />
              )}

              {access === "User" && (
                <LockOpenOutlined sx={{ color: "white" }} fontSize="small" />
              )}

              <Typography
                sx={{ fontSize: 13, color: "white", fontWeight: 600 }}
              >
                {access}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
