import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Content = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
}));
