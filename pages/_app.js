import { ChakraProvider } from "@chakra-ui/provider";
import { CSSReset } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import { ContextProvider } from "../state/Context";
import theme from "../theme";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-TPV9B84QC4" });
  }, []);
  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <CSSReset />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ContextProvider>
  );
}

export default MyApp;
