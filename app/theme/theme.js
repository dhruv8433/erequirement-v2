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
      serviceCard: "#f7f1f2", // light white
    },
    text: {
      primary: "#0000000",
      secondary: "#343a40",
    },
    button: {
      default: "#ff9a00",
    },
    icon: {
      default: "#ff9a00",
    },
    input: {
      default: "#000000",
      background: "#ffffff",
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
      serviceCard: "#ffcd9c17", // light
    },
    text: {
      primary: "#ffffff",
      secondary: "#dee2e6",
    },
    button: {
      default: "#ff9a00",
    },
    icon: {
      default: "#ff9a00",
    },
    input: {
      default: "#ffffff",
      background: "#000000",
    },
  },
});

export { lightTheme, darkTheme };
