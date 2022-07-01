import Document, { Head, Html, Main, NextScript } from "next/document";

const MainDocument = () => {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MainDocument;
