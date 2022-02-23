import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const BrandCard = ({ key, brand, dealDone }) => {
  return (
    <Center key={key} as="li" py={6} width={{ base: "100%", lg: "350px" }}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          {dealDone === "TRUE" ? (
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Got Deal
            </Text>
          ) : (
            <Text
              color={"red.300"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              no deal
            </Text>
          )}

          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {brand.brand_name}
          </Heading>
          <Text color={"gray.500"}>Idea: {brand.idea}</Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default BrandCard;
