import { ChakraProvider } from "@chakra-ui/provider";
import { CSSReset } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import { ContextProvider } from "../state/Context";
import theme from "../theme";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

function MyApp({ Component, pageProps }) {
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
