import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Container marginTop="20" maxWidth={{ base: "95%", lg: "container.xl" }}>
        {children}
      </Container>
    </main>
    <footer></footer>
  </>
);

export default Layout;
