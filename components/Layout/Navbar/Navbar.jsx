import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => (
  <Container maxWidth="container.xl">
    <Flex
      maxWidth="container.xl"
      w="full"
      justifyContent="space-between"
      alignItems="center"
      paddingBlock="2"
    >
      <Box fontSize="3xl" color="blue.300" fontWeight="bold">
        <Link href="/">STI</Link>
      </Box>
      <Flex justifyContent="space-between" columnGap="6" alignItems="center">
        <NavLink href="/brands">Brands</NavLink>
        <NavLink href="/investments">Investments</NavLink>
        <NavLink href="/api-documentation">Api</NavLink>
      </Flex>
    </Flex>
  </Container>
);

export default Navbar;
