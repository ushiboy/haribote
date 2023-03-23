import React from "react";

import * as S from "./style";

/**
 * アプリケーションのメインコンテンツエリア
 */
export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};
