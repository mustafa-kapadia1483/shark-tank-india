import { Box } from "@chakra-ui/react";
import Link from "next/link";

const NavLink = ({ children, href }) => (
  <Box fontSize="xl" color="blue.300">
    <Link href={href}>{children}</Link>
  </Box>
);

export default NavLink;
