import { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import { drawerWidth, headerTop } from "../constant";

interface ContentProps extends BoxProps {
  open?: boolean;
}

export const Content = styled("main")<ContentProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  minHeight: `calc(100vh - ${headerTop}px)`,
  flexGrow: 1,
  padding: theme.spacing(2),
  marginTop: headerTop,
  marginRight: theme.spacing(2),
  borderRadius: theme.spacing(2),
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      width: `calc(100% - ${drawerWidth}px)`,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      width: `calc(100% - ${drawerWidth}px)`,
      padding: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
    },
  }),
}));
