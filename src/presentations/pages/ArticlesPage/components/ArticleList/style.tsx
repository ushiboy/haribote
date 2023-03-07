import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiTableContainer from "@mui/material/TableContainer";

export const Controll = styled(Paper)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const TableWrap = styled(Paper)(() => ({
  width: "100%",
  overflow: "hidden",
}));

export const TableContainer = styled(MuiTableContainer)(() => ({
  maxHeight: 440,
}));
