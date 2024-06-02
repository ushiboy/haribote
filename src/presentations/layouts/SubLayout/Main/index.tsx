import React from "react";

import * as S from "./style";

/**
 * アプリケーションのメインコンテンツエリア
 */
export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <S.Content data-testid="subLayoutMain">{children}</S.Content>;
};
