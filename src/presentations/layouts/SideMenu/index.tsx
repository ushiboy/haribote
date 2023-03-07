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

import * as S from "./style";

import { useAppState } from "@/presentations/contexts";
import { Link } from "@/presentations/sharedComponents/utilities";

export const SideMenu: React.FC = () => {
  const { isShowSideMenu } = useAppState();
  return (
    <S.Drawer variant="permanent" open={isShowSideMenu}>
      <Toolbar />
      <Divider />
      <List component="nav">
        <Link to="articles">
          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Articles" />
          </ListItemButton>
        </Link>
        <Link to="about">
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </Link>
      </List>
    </S.Drawer>
  );
};
