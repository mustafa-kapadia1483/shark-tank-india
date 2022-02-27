import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Avatar,
  VStack,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { CgUnavailable } from "react-icons/cg";
import DealBadge from "./DealBadge";

const BrandCard = ({
  brand: { brand_id, brand_name, idea, industry, website },
  investment: { sharks_in_deal, deal_amount, deal_equity, deal_debt },
}) => {
  website = website.replace("https://", "");
  website = website.replace("www.", "");
  console.log(`https://logo.clearbit.com/${website}`);
  return (
    <Link href={`/brands/${brand_id}`} passHref>
      <Box
        as="li"
        maxW={"445px"}
        py={10}
        px={6}
        width={{ base: "100%", lg: "350px" }}
        height={{ base: "auto", lg: "400px" }}
        bg={useColorModeValue("white", "gray.900")}
        borderWidth="thin"
        borderColor={"gray.700"}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
        textAlign="center"
        cursor="pointer"
      >
        <Stack spacing={"5"}>
          <VStack spacing="5">
            <Avatar
              size="2xl"
              icon={<CgUnavailable />}
              src={`https://logo.clearbit.com/${website}`}
              loading="lazy"
            />
            <VStack spacing="2.5">
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"xl"}
                fontFamily={"body"}
              >
                {brand_name}
              </Heading>
              <Badge>{industry}</Badge>
            </VStack>
          </VStack>
          <Box>
            <DealBadge
              dealAmount={deal_amount}
              dealEquity={deal_equity}
              dealDebt={deal_debt}
              sharksInDeal={sharks_in_deal}
            />
            <Text color={"gray.500"}>Idea: {idea}</Text>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default BrandCard;
