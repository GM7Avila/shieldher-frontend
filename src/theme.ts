import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/700.css";

import { createTheme } from "@mui/material";

const colors = {
  primary: {
    light: "#fff",
    main: "#3f50b5",
    dark: "#002884",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000",
  },
  background: {
    default: "#743992",
    paper: "#fff",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#ccc",
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: '"Titillium Web", sans-serif', // Define a fonte padrão
    fontWeightRegular: 400, // Regular (peso 400)
    fontWeightBold: 700, // Bold (peso 700)
    h1: {
      fontWeight: 700, // Exemplo de título usando o peso Bold
    },
    h2: {
      fontWeight: 700, // Exemplo de título usando o peso Bold
    },
    h3: {
      fontWeight: 400, // Exemplo de título usando o peso Regular
    },
  },
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
});
