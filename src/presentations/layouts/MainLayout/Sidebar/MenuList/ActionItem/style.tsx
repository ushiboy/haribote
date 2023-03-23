import MuiListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";

export const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  borderRadius: `12px`,
  marginBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));
