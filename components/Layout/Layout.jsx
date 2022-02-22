import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Box marginTop="20">{children}</Box>
    </main>
    <footer></footer>
  </>
);

export default Layout;
