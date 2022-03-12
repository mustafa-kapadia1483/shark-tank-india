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
import SiteLogo from "../../ui/SiteLogo";

const Links = [
  { name: "Home", href: "/" },
  { name: "Brands", href: "/brands" },
  { name: "Api", href: "/api-documentation" },
];

const NavLink = ({ children, href }) => (
  <Box
    px={2}
    py={1}
    color="blue.100"
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={href}>{children}</Link>
  </Box>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg="gray.800"
        zIndex="999"
      >
        <Container maxWidth={{ base: "95%", lg: "container.xl" }}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack
              spacing={8}
              w="full"
              alignItems={"center"}
              justifyContent={{ base: "flex-start", md: "space-between" }}
            >
              <SiteLogo />
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
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
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
