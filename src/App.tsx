import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";

import { AppStateContextProvider } from "./presentations/contexts";

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
      <HashRouter>
        <AppStateContextProvider>
          <AppRoutes />
        </AppStateContextProvider>
      </HashRouter>
    </QueryClientProvider>
  );
};
