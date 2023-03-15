import React from "react";

import {
  /** Navigation, SideMenu, MainArea */
  Header,
  SideBar,
  Main,
} from "../";

import * as S from "./style";

/**
 * メインレイアウト
 */
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.Root>
      {/* <Navigation />
      <SideMenu />
      <MainArea>{children}</MainArea> */}
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </S.Root>
  );
};
