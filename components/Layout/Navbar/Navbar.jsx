import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Links = [
  { name: "Home", href: "/" },
  { name: "Brands", href: "/brands" },
  { name: "Api", href: "/api=documentation" },
];

const NavLink = ({ children, href }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    <Link href={href}>{children}</Link>
  </Box>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Container maxWidth={{ base: "full", lg: "container.xl" }}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              spacing={8}
              w="full"
              alignItems={"center"}
              justifyContent={{ base: "flex-end", md: "space-between" }}
            >
              <Box>STI</Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map(link => (
                  <NavLink href={link.href} key={link.name}>
                    {link.name}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map(link => (
                  <NavLink href={link.href} key={link.name}>
                    {link.name}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
