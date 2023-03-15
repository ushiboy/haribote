import React from "react";

import * as S from "./style";

import { default as logo } from "@/assets/logo_sample.svg";

/**
 * ヘッダーロゴ
 */
export const HeaderLogo: React.FC = () => {
  return (
    <S.Logo>
      <S.Icon src={logo} />
      <S.Text variant="h5">Haribote</S.Text>
    </S.Logo>
  );
};
