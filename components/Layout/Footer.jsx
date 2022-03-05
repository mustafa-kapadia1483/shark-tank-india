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

const Footer = () => {
  return (
    <Box bg={"gray.900"}>
      <Container marginTop="20" maxWidth={{ base: "95%", lg: "container.xl" }}>
        <Stack
          py="5"
          direction={{ lg: "row" }}
          justify={{ lg: "space-between" }}
        >
          <Link href="https://github.com/mustafa-kapadia1483/sti" passhref>
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
            <Link href="https://mustafa-kapadia.netlify.app/">
              Mustafa Kapadia
            </Link>
          </Text>
          <HStack spacing="5">
            <Link href="https://www.linkedin.com/in/mustafa-kapadia">
              <Icon as={BsLinkedin} />
            </Link>
            <Link href="hhttps://github.com/mustafa-kapadia1483">
              <Icon as={BsGithub} />
            </Link>
            <Link href="https://www.instagram.com/mustafa.kapadia/">
              <Icon as={BsInstagram} />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
