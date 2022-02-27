import { useEffect, useContext } from "react";
import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import AmountBadges from "../components/ui/AmountBadges";
import BrandList from "../components/ui/BrandList";
import H2 from "../components/ui/H2";
import getJsonArrayFromData from "../helpers/getJsonArrayFromData";
import googleSheetsAuth from "../helpers/googleSheetsAuth";
import numFormatter from "../helpers/numberFormatter";
import queryGoogleSheet from "../helpers/queryGoogleSheet";
import { Context } from "../state/Context";
import H1 from "../components/ui/H1";

export default function Home({
  investments,
  brands,
  moneyGivenForEquity,
  moneyGivenAsDebt,
  totalPitches,
}) {
  const { setInvestments, setBrands } = useContext(Context);
  useEffect(() => {
    setInvestments(investments);
    setBrands(brands);
  }, []);
  return (
    <>
      <Head>
        <title>Shark Tank India Stats</title>
      </Head>
      <Stack flexDirection={"row"} align={"center"} justify={"space-between"}>
        <Box flexDirection={"column"}>
          <H1>
            <Text display="inline-block" color="blue.400">
              shark tank
            </Text>
            <Text ml={2} display="inline-block" color="yellow.300">
              india stats
            </Text>
          </H1>
          <Flex
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="center"
            gap="10"
            marginTop="5"
          >
            <AmountBadges
              amount={numFormatter(moneyGivenForEquity, true) + "+"}
              title="Spent On Equity"
            />
            <AmountBadges
              amount={numFormatter(moneyGivenAsDebt, true) + "+"}
              title="Spent As Debt"
            />
            <AmountBadges amount={totalPitches} title="Brands" />
          </Flex>
        </Box>
        <Flex
          marginTop="10"
          maxWidth="full"
          justifyContent={["none", "center"]}
          position="relative"
        >
          <Image
            src="/home_banner.jpg"
            width="620"
            height="380"
            alt="Banner Image"
            objectFit="fill"
          />
        </Flex>
      </Stack>
      <Box mt="24">
        <H2 color="yellow.300">Pitches</H2>
        <Box marginTop="10" id="brands">
          <BrandList investments={investments} brands={brands} />
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const sheets = await googleSheetsAuth();

  const investmentsResponse = await queryGoogleSheet(
    sheets,
    "investments!A1:P122"
  );
  const investmentsData = investmentsResponse.data.values;
  const investments = getJsonArrayFromData(investmentsData);

  const brandsResponse = await queryGoogleSheet(sheets, "brands!A1:H122");
  const brandsData = brandsResponse.data.values;
  const brands = getJsonArrayFromData(brandsData);

  const totalPitches = brands.length;

  let moneyGivenForEquity = 0;
  let moneyGivenAsDebt = 0;

  investments.forEach((investment) => {
    moneyGivenForEquity += investment.deal_amount
      ? parseInt(investment.deal_amount)
      : 0;
    moneyGivenAsDebt += investment.deal_debt
      ? parseInt(investment.deal_debt)
      : 0;
  });

  moneyGivenAsDebt *= 100000;
  moneyGivenForEquity *= 100000;
  return {
    props: {
      investments,
      brands,
      moneyGivenForEquity,
      moneyGivenAsDebt,
      totalPitches,
    },
  };
}
