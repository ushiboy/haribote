import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import { drawerWidth } from "../../constant";

import MenuList from "./MenuList";
import * as S from "./style";

import { useAppState } from "@/presentations/AppStateContext";
import { HeaderLogo } from "@/presentations/sharedComponents/logos";

/**
 * サイドバー
 */
export const SideBar: React.FC = () => {
  const { isShowSideMenu, toggleSideMenu } = useAppState();

  const theme = useTheme();

  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? drawerWidth : "auto",
      }}
      aria-label="mailbox folders"
    >
      <S.Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={isShowSideMenu}
        onClose={toggleSideMenu}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <S.LogoArea>
          <S.Logo>
            <HeaderLogo />
          </S.Logo>
        </S.LogoArea>
        <MenuList />
      </S.Drawer>
    </Box>
  );
};
