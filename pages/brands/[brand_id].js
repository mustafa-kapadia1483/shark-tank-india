import { Badge, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import DealBadge from "../../components/ui/DealBadge";
import H2 from "../../components/ui/H2";
import googleSheetsAuth from "../../helpers/googleSheetsAuth";
import isNA from "../../helpers/isNA";
import queryGoogleSheet from "../../helpers/queryGoogleSheet";

export default function IndividualBrandPage({ investment, brand }) {
  const [
    sharks_in_deal,
    ask_amount,
    ask_equity,
    ask_valuation,
    deal_amount,
    deal_equity,
    deal_debt,
    deal_valuation,
    ashneer,
    namita,
    anupam,
    vineeta,
    aman,
    peyush,
    ghazal,
  ] = investment;
  const [
    brand_id,
    brand_name,
    idea,
    industry,
    started_in,
    pitchers_city,
    pitchers_state,
    website,
    instagram,
    twitter,
    linkedin,
    founder_1,
    founder_2,
    founder_3,
    founder_4,
    icon,
  ] = brand;

  const sharks = [
    { name: "Ashneer", invested: ashneer },
    { name: "Namita", invested: namita },
    { name: "Anupam", invested: anupam },
    { name: "Vineeta", invested: vineeta },
    { name: "Aman", invested: aman },
    { name: "Peyush", invested: peyush },
    { name: "Ghazal", invested: ghazal },
  ];
  return (
    <Box>
      <Head>
        <title>{brand_name}</title>
        <meta name="description" content={idea} />
      </Head>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        spacing={{ base: "5", md: "none" }}
      >
        <HStack spacing="4" align="flex-start">
          <Box>
            {icon !== "NA" && (
              <Image
                src={`${icon}`}
                width="80px"
                height="80px"
                objectFit="contain"
                objectPosition="center"
                alt={`${brand_name} logo`}
              />
            )}
          </Box>
          <VStack align={"flex-start"}>
            <Box>
              <Text as="h1" fontSize="xl" fontWeight="bold">
                {brand_name}
              </Text>
              <Badge>{industry}</Badge>
            </Box>
            <Text fontSize="sm" color="gray.400">
              {pitchers_city},&nbsp;{pitchers_state}
            </Text>
          </VStack>
        </HStack>
        <VStack
          align={["flex-start", "flex-end"]}
          spacing={{ base: "5", md: "2.5" }}
        >
          <Box
            py="2"
            px="4"
            bg="gray.900"
            borderRadius="lg"
            border="1px"
            borderColor={["gray.600", "gray.700"]}
            boxShadow="xl"
          >
            <DealBadge
              equityAmount={ask_amount}
              equity={ask_equity}
              sharksInDeal={1}
              successMsg="Original Ask: "
              successColor="gray.400"
            />
            <DealBadge
              equityAmount={deal_amount}
              equity={deal_equity}
              debtAmount={deal_debt}
              sharksInDeal={sharks_in_deal}
            />
          </Box>
          {sharks_in_deal > 0 && (
            <HStack>
              <Text>Investment By:</Text>
              <HStack wrap={"wrap"} rowGap="2.5">
                {sharks.map(({ invested, name }) => (
                  <>
                    {!isNA(invested) && (
                      <Badge key={name} colorScheme="purple">
                        {name}
                      </Badge>
                    )}
                  </>
                ))}
              </HStack>
            </HStack>
          )}
        </VStack>
      </Stack>
      <Box marginTop="10">
        <H2 fontSize={["xl", "2xl"]}>About {brand_name}</H2>
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const sheets = await googleSheetsAuth();

  // Brand id from the url
  const { brand_id } = query;
  const row_id = parseInt(brand_id) + 1;
  const investmentRange = `investments!B${row_id}:P${row_id}`;
  const investmentResponse = await queryGoogleSheet(sheets, investmentRange);

  const brandRange = `brands!A${row_id}:P${row_id}`;
  const brandResponse = await queryGoogleSheet(sheets, brandRange);

  // Result
  const investment = investmentResponse.data.values[0];
  const brand = brandResponse.data.values[0];
  return {
    props: {
      investment,
      brand,
    },
  };
}
