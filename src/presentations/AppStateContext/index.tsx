import React, { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router";

import { ApplicationException } from "@/domains/errors";
import { CurrentUser } from "@/domains/models";
import { useGetCurrentUser, useLogout } from "@/presentations/hooks/queries";

type AppState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  initError: ApplicationException | null;
  authenticated: () => void;
  isShowSideMenu: boolean;
  toggleSideMenu: () => void;
  logout: () => Promise<void>;
};

export const AppStateContext = createContext(Object.create(null) as AppState);

export const AppStateContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const navigate = useNavigate();
  const [currenUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isShowSideMenu, setShowSideMenu] = useState(true);

  const { refetch, error, isLoading } = useGetCurrentUser({
    staleTime: Infinity,
    retry: false,
    onSuccess(data) {
      setCurrentUser(data);
    },
  });

  const logoutHandle = useLogout();

  const authenticated = useCallback(() => {
    refetch();
    navigate("/articles");
  }, []);

  const toggleSideMenu = useCallback(() => {
    setShowSideMenu(!isShowSideMenu);
  }, [isShowSideMenu]);

  const logout = useCallback(async () => {
    setCurrentUser(null);
    await logoutHandle.mutateAsync();
    navigate("/");
  }, [logoutHandle]);

  const value: AppState = {
    isLoading,
    isAuthenticated: currenUser != null,
    initError: error,
    authenticated,
    isShowSideMenu,
    toggleSideMenu,
    logout,
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
