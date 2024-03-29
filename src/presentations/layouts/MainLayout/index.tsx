import React from "react";
import { Outlet } from "react-router";

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
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </S.Root>
  );
};
