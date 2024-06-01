import React from "react";
import { Outlet } from "react-router";

import { MainLayoutContextProvider } from "./context";
import { Header } from "./Header";
import { Main } from "./Main";
import { SideBar } from "./Sidebar";
import * as S from "./style";

/**
 * メインレイアウト
 */
export const MainLayout: React.FC = () => {
  return (
    <S.Root>
      <MainLayoutContextProvider>
        <Header />
        <SideBar />
        <Main>
          <Outlet />
        </Main>
      </MainLayoutContextProvider>
    </S.Root>
  );
};
