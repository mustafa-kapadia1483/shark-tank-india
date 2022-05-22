import { Box, Code, Link, Text, VStack } from "@chakra-ui/react";
import H1 from "../components/ui/H1";
import H2 from "../components/ui/H2";

const ApiDocumentationPage = () => {
  return (
    <>
      <H1 textAlign="center" color="yellow.300">
        Shark Tank India API
      </H1>
      <Box mt="10">
        <H2 color="gray.400">Fetching Brands</H2>
        <VStack mt="5" spacing="5" align="flex-start">
          <Text as="p">
            You can fetch all brands using{" "}
            <Link color="teal.200" href="/api/brands">
              https://shark-tank-india-stats.netlify.app/api/brands
            </Link>
          </Text>
          <Code
            variant="outline"
            as="pre"
            p="2"
            borderRadius="md"
            whiteSpace={"pre-wrap"}
          >
            {`[
  {
    "brand_id": "1",
    "brand_name": "BluePine Foods",
    "idea": "Frozen Momos",
    "industry": "Food"
  },
  {
    "brand_id": "2",
    "brand_name": "Booz Scooters",
    "idea": "Renting e-bike for mobility in private spaces",
    "industry": "Electrical Vehicles"
  },
  .
  .
]`}
          </Code>
          <Text as="p">
            You can fetch detailed individual brand data using{" "}
            https://shark-tank-india-stats.netlify.app/api/brands/{"[brand_id]"}
            <br />
            Example: Fetching Data of Brand ID: 1 using{" "}
            <Link color="teal.200" href="/api/brands/1">
              https://shark-tank-india-stats.netlify.app/api/brands/1
            </Link>
          </Text>
          <Code
            variant="outline"
            as="pre"
            p="2"
            maxWidth="full"
            borderRadius="md"
            whiteSpace={"pre-wrap"}
          >
            {`{
  "brand_id": "1",
  "brand_name": "BluePine Foods",
  "idea": "Frozen Momos",
  "industry": "Food",
  "started_in": "2016",
  "pitchers_city": "Delhi",
  "pitchers_state": "Delhi",
  "website": "https://bluepinefoods.com/",
  "instagram": "https://www.instagram.com/bluepine_foods/",
  "twitter": "@BluepineFoods",
  "linkedin": "https://www.linkedin.com/company/bluepinefoods/",
  "founder_1": "Aditi Madan",
  "founder_2": "NA",
  "founder_3": "NA",
  "founder_4": "NA",
  "icon": "https://logo.clearbit.com/bluepinefoods.com/",
  "season_no": "1",
  "episode_no": "1",
  "episode_title": "Badlegi Business Ki Tasveer",
  "about": "[brief description]",
  "youtube_pitch_link": "https://youtu.be/eI_c68aYMp8"
}`}
          </Code>
        </VStack>
      </Box>
      <Box mt="10">
        <H2 color="gray.400">Fetching Individual Brand Investment Data</H2>
        <VStack mt="5" align="flex-start">
          <Text as="p">
            You can fetch detailed individual brand investment data using{" "}
            https://shark-tank-india-stats.netlify.app/api/investments/
            {"[brand_id]"}
            <br />
            Example: Fetching Data of Brand ID: 1 using{" "}
            <Link color="teal.200" href="/api/investments/1">
              https://shark-tank-india-stats.netlify.app/api/investments/1
            </Link>
          </Text>
          <Code
            width={{ base: "full", lg: "auto" }}
            variant="outline"
            as="pre"
            p="2"
            borderRadius="md"
          >
            {`{
  "brand_id": "1",
  "sharks_in_deal": "3",
  "ask_amount": "50",
  "ask_equity": "5",
  "ask_valuation": "1000",
  "deal_amount": "75",
  "deal_equity": "16",
  "deal_debt": "",
  "deal_valuation": "469",
  "ashneer": "TRUE",
  "namita": "FALSE",
  "anupam": "FALSE",
  "vineeta": "TRUE",
  "aman": "TRUE",
  "peyush": "NA",
  "ghazal": "NA"
}`}
          </Code>
        </VStack>
      </Box>
    </>
  );
};

export default ApiDocumentationPage;
