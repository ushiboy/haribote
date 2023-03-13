import { ThemeProvider, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";

import { AppStateContextProvider } from "./AppStateContext";
import { theme } from "./theme";

import { AppRoutes } from "@/presentations/routes";

export const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const queryClient = new QueryClient();
  queryClient.setDefaultOptions({
    queries: {
      retry: 0,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme(prefersDarkMode)}>
        <CssBaseline />
        <HashRouter>
          <AppStateContextProvider>
            <AppRoutes />
          </AppStateContextProvider>
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
