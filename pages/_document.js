// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

const siteImageUrl =
  "https://etetamyl.sirv.com/icons/shark-tank-india-images/home_banner.jpg";
const siteImageDescripton = "Shark Tank Banner";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Shark Tank India Stats" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content={siteImageUrl} />
          <meta property="og:image:alt" content={siteImageDescripton} />
          <meta property="og:image:type" content="image/jpeg" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content={siteImageUrl} />
          <meta name="twitter:image:alt" content={siteImageDescripton} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>

          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"
          ></link>

          <meta name="theme-color" content="#4285f4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
