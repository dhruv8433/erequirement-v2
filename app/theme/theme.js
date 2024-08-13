import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff9a00", // Orange color
    },
    background: {
      default: "#eee", // light gray
      paper: "#ffffff",  // white nav, footer
      primary: "#ffffff" 
    },
    text: {
      primary: "#0000000"
    }
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
      primary: "#000000"
    },
    text: {
      primary: "#ffffff"
    }
  },
});

export { lightTheme, darkTheme };
