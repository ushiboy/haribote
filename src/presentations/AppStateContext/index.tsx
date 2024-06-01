import React, { createContext, useCallback, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate, useLocation } from "react-router";

import { ApplicationException } from "@/domains/errors";
import { CurrentUser } from "@/domains/models";
import { useGetCurrentUser, useLogout } from "@/presentations/hooks/queries";

type AppState = {
  isLoading: boolean;
  isAdmin: boolean;
  isAuthenticated: boolean;
  initError: ApplicationException | null;
  authenticated: () => void;
  logout: () => Promise<void>;
  release: () => void;
};

export const AppStateContext = createContext(Object.create(null) as AppState);

export const AppStateContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const [currenUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const { refetch, error, isLoading } = useGetCurrentUser({
    staleTime: Infinity,
    retry: false,
    onSuccess(data) {
      setCurrentUser(data);
    },
    onError() {
      setCurrentUser(null);
    },
  });

  const logoutHandle = useLogout();

  const authenticated = useCallback(() => {
    refetch();
    const from = location.state?.from?.pathname || "/articles";
    navigate(from, { replace: true });
  }, [location, navigate, refetch]);

  const logout = useCallback(async () => {
    setCurrentUser(null);
    await logoutHandle.mutateAsync();
    client.clear();
    navigate("/", { replace: true });
  }, [logoutHandle, client, navigate]);

  const release = useCallback(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);

  const value: AppState = {
    isLoading,
    isAdmin: currenUser?.isAdmin === true,
    isAuthenticated: currenUser != null,
    initError: error,
    authenticated,
    logout,
    release,
  };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
