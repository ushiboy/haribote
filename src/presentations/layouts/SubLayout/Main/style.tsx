import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { headerTop } from "../../constant";

export const Content = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  minHeight: `calc(100vh - ${headerTop}px)`,
  flexGrow: 1,
  padding: theme.spacing(2),
  marginTop: headerTop,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  borderRadius: theme.spacing(2),
}));
