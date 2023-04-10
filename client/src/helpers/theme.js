import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#09A6F3",
      dark: "#0A85ED",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#0A85ED",
      dark: "#0C63E7",
      contrastText: "rgba(255,255,255,0.87)",
    },
    divider: "rgba(131,131,131,0.12)",
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
