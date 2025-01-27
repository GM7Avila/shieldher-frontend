import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/700.css";

import { createTheme } from "@mui/material";

const colors = {
  primary: {
    light: "#dda3ff",
    main: "#c779f2",
    dark: "#a55fce",
    contrastText: "#c779f2",
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
  // COMPONENTES MUI
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.main, // Cor do contorno
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.light, // Cor do contorno ao passar o mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.light, // Cor do contorno quando estiver focado
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.text.primary, // Cor do rótulo do TextField
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.text.secondary, // Cor do texto de ajuda do TextField
        },
      },
    },
  },
});
