import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { CgUnavailable } from "react-icons/cg";

const BrandCard = ({
  brand: { brand_name, idea, industry, website },
  investment: { sharks_in_deal },
}) => {
  return (
    <Box
      as="li"
      maxW={"445px"}
      py={10}
      px={6}
      width={{ base: "100%", lg: "350px" }}
      height={{ base: "auto", lg: "350px" }}
      bg={useColorModeValue("white", "gray.900")}
      borderWidth="thin"
      borderColor={"gray.700"}
      boxShadow={"2xl"}
      rounded={"lg"}
      overflow={"hidden"}
      textAlign="center"
    >
      <Stack>
        <VStack spacing="5">
          <Avatar
            size="2xl"
            icon={<CgUnavailable />}
            src={`https://logo.clearbit.com/${website}`}
            loading="lazy"
          />
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {brand_name}
          </Heading>
        </VStack>
        <HStack justify="center" spacing="2">
          <Badge>{industry}</Badge>
          {parseInt(sharks_in_deal) ? (
            <Badge colorScheme="green">Got Deal</Badge>
          ) : (
            <Badge colorScheme="red">No Deal</Badge>
          )}
        </HStack>
        <Text color={"gray.500"}>Idea: {idea}</Text>
      </Stack>
    </Box>
  );
};

export default BrandCard;
