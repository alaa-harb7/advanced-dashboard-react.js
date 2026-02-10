// src/theme.jsx
import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// إنشاء context لتغيير المود
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeWrapper({ children }) {
  // نحاول نقرأ الوضع من localStorage
  const storedMode = localStorage.getItem("themeMode") || "light";

  const [mode, setMode] = useState(storedMode);

  // دالة لتبديل المود
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  // تحديث الثيم لما يتغير المود
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: { default: "#f5f5f5" },
                text: { primary: "#000" },
              }
            : {
                background: { default: "#121212" },
                text: { primary: "#fff" },
              }),
        },
        typography: {
          fontFamily: "Alex, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* لتوحيد الخلفية حسب المود */}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
