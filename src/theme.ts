import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/700.css";

import { createTheme } from "@mui/material";

// Definição das cores personalizadas para o tema
const colors = {
  primary: {
    light: "#dda3ff", // Cor mais clara do tema primário
    main: "#c779f2", // Cor principal do tema primário
    dark: "#a55fce", // Cor mais escura do tema primário
    contrastText: "#c779f2", // Cor do texto de contraste no tema primário
  },
  secondary: {
    light: "#ff7961", // Cor mais clara do tema secundário
    main: "#ff3f56", // Cor principal do tema secundário
    dark: "#ba000d", // Cor mais escura do tema secundário
    contrastText: "#000", // Cor do texto de contraste no tema secundário
  },
  error: {
    light: "#ff7272", // Cor clara para erros
    main: "#ff7272", // Cor principal de erro
    dark: "#ff7272", // Cor escura para erros
    contrastText: "#ff8787", // Texto contrastante para erros
  },
  background: {
    default: "#743992", // Cor de fundo padrão
    paper: "#fff", // Cor de fundo do componente de papel
  },
  text: {
    primary: "#FFFFFF", // Cor do texto principal
    secondary: "#ccc", // Cor do texto secundário
  },
};

/**
 * Tema personalizado para a aplicação utilizando Material UI.
 *
 * Este tema inclui:
 * - Tipografia configurada para a fonte "Titillium Web".
 * - Paleta de cores personalizadas para temas primário, secundário, erro, fundo e texto.
 * - Estilizações para componentes de formulário como `MuiOutlinedInput`, `MuiInputLabel` e `MuiFormHelperText`.
 */
export const theme = createTheme({
  // Tipografia personalizada
  typography: {
    fontFamily: '"Titillium Web", sans-serif', // Fonte padrão para a aplicação
    fontWeightRegular: 400, // Peso normal (regular) da fonte
    fontWeightBold: 700, // Peso negrito (bold) da fonte
    h1: {
      fontWeight: 700, // Peso negrito para o título h1
    },
    h2: {
      fontWeight: 700, // Peso negrito para o título h2
    },
    h3: {
      fontWeight: 400, // Peso regular para o título h3
    },
  },

  // Paleta de cores personalizada
  palette: {
    primary: colors.primary, // Tema de cores primárias
    secondary: colors.secondary, // Tema de cores secundárias
    error: colors.error, // Tema de cores de erro
    background: {
      default: colors.background.default, // Cor de fundo padrão
      paper: colors.background.paper, // Cor de fundo do componente de papel
    },
    text: {
      primary: colors.text.primary, // Cor do texto principal
      secondary: colors.text.secondary, // Cor do texto secundário
    },
  },

  // Estilos personalizados para componentes específicos do Material UI
  components: {
    // Estilização do componente MuiOutlinedInput (campo de input com borda)
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.main, // Cor do contorno do input
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.light, // Cor do contorno ao passar o mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.light, // Cor do contorno quando focado
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.error.main, // Cor do contorno quando houver erro
          },
          "input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #573769 inset !important", // Cor de fundo do autofill
            WebkitTextFillColor: "#fff !important", // Cor do texto do autofill
            WebkitTextDecoration: "none !important", // Remover decoração de texto
            WebkitAppearance: "none", // Remover aparência nativa do input
            WebkitTapHighlightColor: "transparent !important", // Remover highlight ao clicar
          },
        },
      },
    },

    // Estilização do componente MuiInputLabel (rótulo do input)
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.text.primary, // Cor do rótulo do input
          "&.Mui-error": {
            color: colors.error.main, // Cor do rótulo em caso de erro
          },
        },
      },
    },

    // Estilização do componente MuiFormHelperText (texto de ajuda no formulário)
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.text.secondary, // Cor do texto de ajuda
          "&.Mui-error": {
            color: colors.error.main, // Cor do texto de ajuda em caso de erro
          },
        },
      },
    },
  },
});
