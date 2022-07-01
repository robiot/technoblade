import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { DarkTheme } from "../lib/theme";

const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: ${({ theme }) => theme.theme};
    }
    
    * { 
        box-sizing: border-box;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }

    body {
        overflow-y: scroll;
    }

    html, body {
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        color: ${({ theme }) => theme.palette.primary.foreground};
        background: ${({ theme }) => theme.palette.primary.background};
    }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
