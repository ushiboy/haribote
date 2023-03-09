import { styled } from "@mui/material/styles";
import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

/**
 * アプリケーション内リンク
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <StyledLink ref={ref} {...props} />
);

const StyledLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));
