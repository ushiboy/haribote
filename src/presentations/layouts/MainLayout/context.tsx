import { createContext, useCallback, useContext, useState } from "react";

type MainLayoutContext = {
  isShowSideMenu: boolean;
  toggleSideMenu: () => void;
}

const context = createContext(Object.create(null) as MainLayoutContext)

export const MainLayoutContextProvider: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  const [isShowSideMenu, setShowSideMenu] = useState(true);
  const toggleSideMenu = useCallback(() => 
    setShowSideMenu((prev) => !prev)
  , []);

  return (
    <context.Provider value={{
      isShowSideMenu,
      toggleSideMenu
    }}>
      {children}
    </context.Provider>
  )
}

export const useMainLayoutContext = () => {
  return useContext(context)
}