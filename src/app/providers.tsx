"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@/theme/theme";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}