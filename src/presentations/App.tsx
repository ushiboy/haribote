import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";

import { AppStateContextProvider } from "./contexts";
import { theme } from "./theme";

import { AppRoutes } from "@/presentations/routes";

export const App: React.FC = () => {
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
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <AppStateContextProvider>
            <AppRoutes />
          </AppStateContextProvider>
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
