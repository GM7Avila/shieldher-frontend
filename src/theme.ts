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
    main: "#ff3f56",
    dark: "#ba000d",
    contrastText: "#000",
  },
  error: {
    light: "#ff7272", // Cor clara para erros
    main: "#ff7272", // Cor principal de erro
    dark: "#ff7272", // Cor escura para erros
    contrastText: "#ff8787", // Texto contrastante
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
    error: colors.error, // Define a paleta de erro
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
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.error.main, // Cor do contorno quando houver erro
          },
          "input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #573769 inset !important", // Cor de fundo
            WebkitTextFillColor: "#fff !important", // Cor do texto
            WebkitTextDecoration: "none !important", // Remover qualquer decoração do texto
            WebkitAppearance: "none", // Remover a aparência nativa do input (caso necessário)
            WebkitTapHighlightColor: "transparent !important", // Remover highlight ao clicar
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.text.primary, // Cor do rótulo do TextField
          "&.Mui-error": {
            color: colors.error.main, // Cor do label em caso de erro
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.text.secondary,
          "&.Mui-error": {
            color: colors.error.main,
          },
        },
      },
    },
  },
});
