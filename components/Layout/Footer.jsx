import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BsGithub,
  BsSuitHeartFill,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const SocialLinkButton = ({ href, icon }) => {
  return (
    <Link href={href}>
      <Icon as={icon} />
    </Link>
  );
};

const Footer = () => {
  return (
    <Box bg={"gray.900"}>
      <Container marginTop="20" maxWidth={{ base: "95%", lg: "container.xl" }}>
        <Stack
          py="5"
          direction={{ base: "column", lg: "row" }}
          justify={{ lg: "space-between" }}
          spacin="2.5"
          textAlign="center"
          as="address"
          fontStyle="normal"
        >
          <Link href="https://github.com/mustafa-kapadia1483/sti" isExternal>
            <Button leftIcon={<BsGithub />} variant="link">
              Github Repo
            </Button>
          </Link>
          <Text fontSize="md">
            Made with
            <Icon
              verticalAlign="center"
              mx="2"
              as={BsSuitHeartFill}
              color="red.500"
            />
            by&nbsp;
            <Link href="https://mustafa-kapadia.netlify.app/" isExternal>
              Mustafa Kapadia
            </Link>
          </Text>
          <HStack spacing="5" justify="center">
            <SocialLinkButton
              href="https://www.linkedin.com/in/mustafa-kapadia"
              icon={() => <BsLinkedin />}
            />
            <SocialLinkButton
              href="https://github.com/mustafa-kapadia1483"
              icon={() => <BsGithub />}
            />
            <SocialLinkButton
              href="https://www.instagram.com/mustafa.kapadia/"
              icon={() => <BsInstagram />}
            />
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
