import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const MainDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MainDocument.getInitialProps = async (context: any) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = context.renderPage;

  try {
    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (properties: any) =>
          sheet.collectStyles(<App {...properties} />),
      });

    const initialProperties = await Document.getInitialProps(context);

    return {
      ...initialProperties,
      styles: (
        <>
          {initialProperties.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default MainDocument;
