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
  StackDivider,
} from "@chakra-ui/react";
import { CgUnavailable } from "react-icons/cg";
import numFormatter from "../../helpers/numberFormatter";

const BrandCard = ({
  brand: { brand_name, idea, industry, website },
  investment: { sharks_in_deal, deal_amount, deal_equity, deal_debt },
}) => {
  const dealString = (equityAmt, equityPercentage, debtAmt = null) => {
    let dealStr = `${numFormatter(
      parseFloat(equityAmt) * 100000
    )} for ${equityPercentage}%`;
    if (debtAmt)
      dealStr += ` and ${numFormatter(parseFloat(debtAmt) * 100000)} Debt`;
    return dealStr;
  };
  return (
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
          {parseInt(sharks_in_deal) ? (
            <Text color="green.500">
              Deal Got:{" "}
              {parseFloat(deal_debt)
                ? dealString(deal_amount, deal_equity, deal_debt)
                : dealString(deal_amount, deal_equity)}
            </Text>
          ) : (
            <Text color="red.500">No Deal</Text>
          )}
          <Text color={"gray.500"}>Idea: {idea}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default BrandCard;
