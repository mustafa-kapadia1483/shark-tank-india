import { extendTheme } from "@chakra-ui/react";
import "@fontsource/jetbrains-mono";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  components: {
    Code: {
      baseStyle: {
        fontFamily: "JetBrains Mono, mono",
      },
    },
  },
});

export default theme;
