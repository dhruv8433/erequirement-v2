import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff9a00", // Orange color
    },
    background: {
      default: "#eee", // light gray
      paper: "#ffffff", // white nav, footer
      primary: "#ffffff",
      card: "#f8f9fa", // light white
      cardhover: "#f8edeb",
    },
    text: {
      primary: "#0000000",
      secondary: "#343a40",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9a00", // Orange color
    },
    background: {
      default: "#292929", // light black
      paper: "#000000", // black nav, footer
      primary: "#000000",
      card: "#1a1a1a", // light black
      cardhover: "#0d0906;",
    },
    text: {
      primary: "#ffffff",
      secondary: "#dee2e6",
    },
  },
});

export { lightTheme, darkTheme };
