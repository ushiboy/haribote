import React from "react";

import { Header, SideBar, Main } from "../";

import * as S from "./style";

/**
 * メインレイアウト
 */
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.Root>
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </S.Root>
  );
};
