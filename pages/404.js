import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import H1 from "../components/ui/H1";

export default function Custom404() {
  return (
    <Stack
      marginTop={["16", "32"]}
      width="full"
      height="full"
      align="center"
      justify="space-evenly"
      direction={["column", "row"]}
      gap={["10", "5"]}
    >
      <Box textAlign={["center", "left"]}>
        <H1 textAlign={["center", "left"]}>404 - Not Found</H1>
        <Text mt="2" fontSize={{ lg: "xl" }} color={"gray.400"} maxWidth={"md"}>
          The page you trying to find does not exist at this moment
        </Text>
      </Box>
      <Image
        src="/404-banner.jpg"
        width="400"
        height="379"
        alt="what are you trying to do"
      />
    </Stack>
  );
}
