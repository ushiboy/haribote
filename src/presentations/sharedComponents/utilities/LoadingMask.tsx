import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

/**
 * ローディングマスク
 */
export const LoadingMask: React.FC<{ show: boolean }> = ({ show }) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={show}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);
