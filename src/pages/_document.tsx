import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
