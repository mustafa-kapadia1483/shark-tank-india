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
} from "@chakra-ui/react";
import { CgUnavailable } from "react-icons/cg";

const BrandCard = ({
  brand: { brand_name, idea, website },
  investment: { sharks_in_deal },
}) => {
  return (
    <Center as="li" py={6} width={{ base: "100%", lg: "350px" }}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        textAlign="center"
      >
        <Stack>
          <VStack spacing="5">
            <Avatar
              size="2xl"
              icon={<CgUnavailable />}
              src={`https://logo.clearbit.com/${website}`}
            />
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
            >
              {brand_name}
            </Heading>
          </VStack>
          {parseInt(sharks_in_deal) ? (
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
          <Text color={"gray.500"}>{idea}</Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default BrandCard;
