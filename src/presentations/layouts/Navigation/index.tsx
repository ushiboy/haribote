import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./style";

import { useAppState } from "@/presentations/contexts";

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const { toggleSideMenu, logout } = useAppState();
  return (
    <S.AppBar position="absolute">
      <Toolbar>
        <S.MenuButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSideMenu}
        >
          <MenuIcon />
        </S.MenuButton>
        <S.Title>Haribote</S.Title>
        <Button color="inherit" onClick={logout}>
          {t("SignOut")}
        </Button>
      </Toolbar>
    </S.AppBar>
  );
};
