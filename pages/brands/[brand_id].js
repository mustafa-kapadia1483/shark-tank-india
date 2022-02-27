import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import DealBadge from "../../components/ui/DealBadge";
import googleSheetsAuth from "../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../helpers/queryGoogleSheet";

export default function IndividualBrandPage({ investment, brand }) {
  const [sharks_in_deal] = investment;
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

  return (
    <Box>
      <HStack spacing="4" align="flex-start">
        <Box>
          {icon !== "NA" && (
            <Image src={`${icon}`} width="80px" height="80px" />
          )}
        </Box>
        <Box>
          <Text as="h1" fontSize="xl" fontWeight="bold">
            {brand_name}
          </Text>
          <Text as="h2" fontSize="md" color="gray.400">
            {industry}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const sheets = await googleSheetsAuth();

  // Brand id from the url
  const { brand_id } = query;
  const row_id = parseInt(brand_id) + 1;
  const investmentRange = `investments!B${row_id}:C${row_id}`;
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
