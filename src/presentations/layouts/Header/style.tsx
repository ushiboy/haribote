import { Avatar, Box, ButtonBase } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import { drawerWidth } from "../constant";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  transition: open ? theme.transitions.create("width") : "none",
}));

export const LogoArea = styled(Box)(({ theme }) => ({
  width: `cal(${drawerWidth}px - 16px)`,
  display: "flex",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

export const Logo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginRight: theme.spacing(5),
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const Button = styled(ButtonBase)(() => ({
  borderRadius: "12px",
  margin: "auto",
  overflow: "hidden",
}));

export const Toggle = styled(Avatar)(({ theme }) => ({
  borderRadius: "8px",
  width: "34px",
  height: "34px",
  fontSize: "1.2rem",
  transition: "all .2s ease-in-out",
  background: theme.palette.action.focus,
  color: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary.light,
    color: theme.palette.background.paper,
  },
}));

export const Blank = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));
