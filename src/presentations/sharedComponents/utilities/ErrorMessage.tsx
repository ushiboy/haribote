import { Typography } from "@mui/material";
import React from "react";

export const ErrorMessage: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.error.main,
      }}
    >
      {message}
    </Typography>
  );
};
