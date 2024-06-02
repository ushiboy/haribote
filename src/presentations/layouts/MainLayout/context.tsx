import { createContext, useCallback, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router";

import { useLogout } from "@/presentations/hooks/queries";

type MainLayoutContext = {
  isShowSideMenu: boolean;
  toggleSideMenu: () => void;
  logout: () => void;
};

const context = createContext(Object.create(null) as MainLayoutContext);

export const MainLayoutContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isShowSideMenu, setShowSideMenu] = useState(true);
  const toggleSideMenu = useCallback(
    () => setShowSideMenu((prev) => !prev),
    [],
  );

  const { mutateAsync } = useLogout();
  const logout = useCallback(async () => {
    await mutateAsync();
    queryClient.clear();
    navigate("/", { replace: true });
  }, [queryClient, mutateAsync, navigate]);

  return (
    <context.Provider
      value={{
        isShowSideMenu,
        toggleSideMenu,
        logout,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useMainLayoutContext = () => {
  return useContext(context);
};
