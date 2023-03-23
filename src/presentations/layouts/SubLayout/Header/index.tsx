import { Toolbar } from "@mui/material";
import React from "react";

import * as S from "./style";

import { HeaderLogo } from "@/presentations/sharedComponents/logos";

/**
 * ヘッダー
 */
export const Header: React.FC = () => {
  return (
    <S.AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}>
      <Toolbar>
        <S.LogoArea>
          <S.Logo component="span">
            <HeaderLogo />
          </S.Logo>
        </S.LogoArea>
      </Toolbar>
    </S.AppBar>
  );
};
