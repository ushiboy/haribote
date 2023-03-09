import { Toolbar } from "@mui/material";
import React from "react";

import * as S from "./style";

/**
 * アプリケーションのメインコンテンツエリア
 */
export const MainArea: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.Content component="main">
      <Toolbar />
      {children}
    </S.Content>
  );
};
