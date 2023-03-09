import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import {
  Toolbar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

import * as S from "./style";

import { useAppState } from "@/presentations/AppStateContext";
import { Link } from "@/presentations/sharedComponents/utilities";

/**
 * サイドメニュー
 */
export const SideMenu: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { isShowSideMenu } = useAppState();
  return (
    <S.Drawer variant="permanent" open={isShowSideMenu}>
      <Toolbar />
      <Divider />
      <List component="nav">
        <Link to="articles">
          <ListItemButton selected={pathname === "/articles"}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={t("Article")} />
          </ListItemButton>
        </Link>
        <Link to="about">
          <ListItemButton selected={pathname === "/about"}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={t("About")} />
          </ListItemButton>
        </Link>
      </List>
    </S.Drawer>
  );
};
