import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        background: string;
        foreground: string;
      };

      secondary: {
        background: string;
        foreground: string;
      };

      tertiary: {
        background: string;
        foreground: string;
      };

      accent: {
        green: {
          default: string;
        };
        red: {
          default: string;
        };
      };
    };

    breakpoints: {
      large: string;
      medium: string;
      small: string;
    };

    theme: "light" | "dark";
  }
}
