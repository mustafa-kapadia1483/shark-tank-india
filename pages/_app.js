import { ChakraProvider } from "@chakra-ui/provider";
import { CSSReset } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
