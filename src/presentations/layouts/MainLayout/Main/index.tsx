import React from "react";

import { useMainLayoutContext } from "../context";

import * as S from "./style";

/**
 * アプリケーションのメインコンテンツエリア
 */
export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isShowSideMenu } = useMainLayoutContext();

  return <S.Content open={isShowSideMenu}>{children}</S.Content>;
};
