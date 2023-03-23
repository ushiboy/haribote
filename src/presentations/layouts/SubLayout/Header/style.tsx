import { Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import { drawerWidth } from "../../constant";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
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
