import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

const Layout = ({ children }) => (
  <>
    <SkipNavLink zIndex="1000">Skip to content</SkipNavLink>
    <header>
      <Navbar />
    </header>
    <main>
      <SkipNavContent />
      <Container marginTop="20" maxWidth={{ base: "95%", lg: "container.xl" }}>
        {children}
      </Container>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
