import MuiList from "@mui/material/List";
import { styled } from "@mui/material/styles";

export const List = styled(MuiList)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
