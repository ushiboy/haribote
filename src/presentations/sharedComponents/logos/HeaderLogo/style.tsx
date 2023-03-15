import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Logo = styled(Box)(() => ({
  display: "flex",
  margin: "auto",
}));

export const Icon = styled("img")(() => ({
  height: "2rem",
  paddingRight: "0.5rem",
}));

export const Text = styled(Typography)(() => ({
  height: "2rem",
}));
