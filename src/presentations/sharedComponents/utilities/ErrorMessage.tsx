import { Typography } from "@mui/material";
import React from "react";

/**
 * エラーメッセージ
 */
export const ErrorMessage: React.FC<{
  message: string;
  dataTestId?: string;
}> = ({ message, dataTestId }) => {
  return (
    <Typography
      data-testid={dataTestId || "errorMessage"}
      sx={{
        color: (theme) => theme.palette.error.main,
      }}
    >
      {message}
    </Typography>
  );
};
