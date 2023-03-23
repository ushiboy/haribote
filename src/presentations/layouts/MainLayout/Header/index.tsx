import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar } from "@mui/material";
import React from "react";

import { NotificationSection } from "./NotificationSection";
import { ProfileSection } from "./ProfileSection";
import { SelectSection } from "./SelectSection";
import * as S from "./style";

import { useAppState } from "@/presentations/AppStateContext";
import { HeaderLogo } from "@/presentations/sharedComponents/logos";

/**
 * ヘッダー
 */
export const Header: React.FC = () => {
  const { toggleSideMenu } = useAppState();

  return (
    <S.AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}>
      <Toolbar>
        <S.LogoArea>
          <S.Logo component="span">
            <HeaderLogo />
          </S.Logo>
          <S.Button>
            <S.Toggle
              variant="rounded"
              onClick={toggleSideMenu}
              color="inherit"
            >
              <MenuIcon />
            </S.Toggle>
          </S.Button>
        </S.LogoArea>
        <SelectSection />
        <S.Blank />
        <NotificationSection />
        <ProfileSection />
      </Toolbar>
    </S.AppBar>
  );
};
