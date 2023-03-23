import React from "react";
import { Outlet } from "react-router";

import { Header } from "./Header";
import { Main } from "./Main";
import * as S from "./style";

/**
 * サブレイアウト
 */
export const SubLayout: React.FC = () => {
  return (
    <S.Root>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </S.Root>
  );
};
