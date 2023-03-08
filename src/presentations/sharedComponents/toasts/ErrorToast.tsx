import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

export const ErrorToast: React.FC<{
  show: boolean;
  message: string;
  duration?: number;
  onClose?: () => void;
}> = ({ show, message, duration, onClose }) => (
  <Snackbar
    open={show}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    autoHideDuration={duration || 2000}
    onClose={onClose}
  >
    <MuiAlert severity="error" variant="filled" sx={{ width: "100%" }}>
      {message}
    </MuiAlert>
  </Snackbar>
);
