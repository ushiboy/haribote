import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

/**
 * エラートースト
 */
export const ErrorToast: React.FC<{
  show: boolean;
  message: string;
  duration?: number;
  dataTestId?: string;
  onClose?: () => void;
}> = ({ show, message, duration, dataTestId, onClose }) => (
  <Snackbar
    open={show}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    autoHideDuration={duration || 2000}
    onClose={onClose}
    data-testid={dataTestId || "errorToast"}
  >
    <MuiAlert severity="error" variant="filled" sx={{ width: "100%" }}>
      {message}
    </MuiAlert>
  </Snackbar>
);
