import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  palette: {
    primary: {
      background: "#111111",
      foreground: "#FFFFFF",
    },

    secondary: {
      background: "#333333",
      foreground: "#FFFFFF",
    },

    tertiary: {
      background: "#3b3b3b",
      foreground: "#FFFFFF",
    },

    accent: {
      green: {
        default: "#008000",
      },
      red: {
        default: "#d92121",
      },
    },
  },

  breakpoints: {
    large: "1200px",
    medium: "700px",
    small: "500px",
  },

  theme: "dark",
};
