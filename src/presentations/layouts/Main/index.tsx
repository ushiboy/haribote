import React from "react";

import * as S from "./style";

import { useAppState } from "@/presentations/AppStateContext";

/**
 * アプリケーションのメインコンテンツエリア
 */
export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isShowSideMenu } = useAppState();

  return <S.Content open={isShowSideMenu}>{children}</S.Content>;
};
