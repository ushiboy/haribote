import { createTheme } from "@mui/material";

export const theme = (isDark: boolean) =>
  createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      ...(!isDark
        ? {
            // palette values for light mode
            // light, dark: will be calculated from main,
            primary: {
              main: "#0085C7",
            },
            secondary: {
              main: "#ff6519",
            },
            error: {
              main: "#d32f2f",
            },
            warning: {
              main: "#f5b82e",
            },
            info: { main: "#2a99a5" },
            success: { main: "#2bc016" },
          }
        : {
            // palette values for dark mode
            // light, dark: will be calculated from main,
            primary: {
              main: "#00aaf9",
            },
            secondary: {
              main: "#ff8147",
            },
            error: {
              main: "#db5656",
            },
            warning: {
              main: "#f6c65f",
            },
            info: { main: "#34beca" },
            success: { main: "#39e41f" },
          }),
    },
  });
