import { Box } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

import { drawerWidth, headerTop } from "../../constant";

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: "none",
    [theme.breakpoints.up("md")]: {
      top: headerTop,
    },
  },
}));

export const LogoArea = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

export const Logo = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  [theme.breakpoints.up("md")]: { display: "none" },
}));
