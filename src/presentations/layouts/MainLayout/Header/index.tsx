import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar } from "@mui/material";
import React from "react";

import { useMainLayoutContext } from "../context";

import { NotificationSection } from "./NotificationSection";
import { ProfileSection } from "./ProfileSection";
import { SelectSection } from "./SelectSection";
import * as S from "./style";

import { HeaderLogo } from "@/presentations/sharedComponents/logos";

/**
 * ヘッダー
 */
export const Header: React.FC = () => {
  const { toggleSideMenu } = useMainLayoutContext();

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
