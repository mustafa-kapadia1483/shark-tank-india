import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
);

export default Layout;
