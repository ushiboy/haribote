import React from "react";

import { Navigation, SideMenu, MainArea } from "../";

import * as S from "./style";

/**
 * メインレイアウト
 */
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.Root>
      <Navigation />
      <SideMenu />
      <MainArea>{children}</MainArea>
    </S.Root>
  );
};
