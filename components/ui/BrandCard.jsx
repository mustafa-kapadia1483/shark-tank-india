import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  VStack,
  Badge,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import isNA from "../../helpers/isNA";
import DealBadge from "./DealBadge";
import BrandAvatar from "./Avatar";

const BrandCard = ({
  brand: { brand_id, brand_name, idea, industry, icon, season_no, episode_no },
  investment: {
    sharks_in_deal,
    deal_amount,
    deal_equity,
    deal_debt,
    deal_valuation,
  },
}) => {
  return (
    <Link href={`/brands/${brand_id}`} passHref>
      <Box
        as="li"
        maxW={"445px"}
        p={10}
        width={{ base: "100%", md: "340px", lg: "350px" }}
        height={{ base: "auto", md: "440px", lg: "425px" }}
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
            {isNA(icon) ? (
              <Avatar size="2xl" name={brand_name} />
            ) : (
              <BrandAvatar imageSrc={icon} alt={brand_name} />
            )}
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
              equityAmount={deal_amount}
              equity={deal_equity}
              debtAmount={deal_debt}
              sharksInDeal={sharks_in_deal}
              dealValuation={parseInt(deal_valuation)}
            />
            <Text color={"gray.500"} marginTop="2.5" fontSize="lg">
              Idea: {idea}
            </Text>
            <Text color={"gray.600"} marginTop="1">
              Season {season_no}, Episode: {episode_no}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default BrandCard;
