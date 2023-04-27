import Head from "next/head";
import Home from "@/components/home/home";

export default function App() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Mellina Yonashiro - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico?v1" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico?v1" type="image/x-icon" />
        <meta
          property="og:title"
          content="Mellina Yonashiro - Software Engineer"
        />
        <meta
          property="og:site_name"
          content="Mellina Yonashiro - Software Engineer"
        />
        <meta
          property="og:description"
          content="Mellina Yonashiro professional website"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/yogmel/yogmel.github.io/master/img/social-img.png"
        />
        <meta property="og:url" content="https://yogmel.github.io/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./img/social/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./img/social/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./img/social/favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Screenshot of header of website, that reads 'Hi, I'm Mellina Yonashiro, software engineer"
        />

        {/* <script
          src="https://kit.fontawesome.com/696c0fcff5.js"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <Home />
    </>
  );
}
