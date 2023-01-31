import { useEffect, useContext } from "react";
import { Box, Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";
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
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { SharkBarChart } from "../components/ui/SharkBarChart";

export default function Home({
  investments,
  brands,
  moneyGivenForEquity,
  moneyGivenAsDebt,
  totalPitches,
}) {
  const { setInvestments, setBrands } = useContext(Context);

  const pageDescription =
    "Shark Tank India Stats Page, view brands that came on shark tank, the deals the got. Everything about shark tank india in one place";
  const pageTitle = "Shark Tank India Stats";

  investments.reverse();
  setInvestments(investments);
  setBrands(brands);

  useEffect(() => {
    localStorage.setItem("investments", JSON.stringify(investments));
    localStorage.setItem("brands", JSON.stringify(brands));
  }, [investments, brands]);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        <meta property="og:url" content={process.env.SITE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />

        <meta name="twitter:url" content={process.env.SITE_URL} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>
      <H1 textAlign="center">
        <Text display="inline-block" color="blue.400">
          shark tank
        </Text>
        <Text ml={2} display="inline-block" color="yellow.300">
          india stats
        </Text>
      </H1>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="10"
        marginTop="5"
      >
        <AmountBadges
          amount={numFormatter(moneyGivenForEquity, true) + "+"}
          title="Invested in Equity"
        />
        <AmountBadges
          amount={numFormatter(moneyGivenAsDebt, true) + "+"}
          title="Invested As Debt"
        />
        <AmountBadges amount={totalPitches} title="Brands" />
      </Flex>
      <Flex
        marginTop="10"
        maxWidth="full"
        justifyContent={["none", "center"]}
        position="relative"
      >
        <Image
          src="https://etetamyl.sirv.com/icons/shark-tank-india-images/home_banner.jpg"
          width="640"
          height="360"
          alt="Banner Image"
          objectFit="fill"
        />
      </Flex>
      <Box mt="24">
        <H2 color="yellow.300" textAlign="center">
          Money Invested By Individual Sharks
        </H2>
        <Box
          marginInline="auto"
          height={["300px", "400px"]}
          maxW={["100%", "70%"]}
          mt="6"
          overflow="auto"
        >
          <SharkBarChart brands={brands} investments={investments} />
        </Box>
      </Box>
      <Box mt="24">
        <H2 color="yellow.300" textAlign="center">
          Latest Pitches
        </H2>
        <VStack marginTop="4" id="brands" spacing={10} marginBottom={10}>
          <BrandList investments={investments.slice(0, 6)} brands={brands} />
          <Link href="/brands" passHref>
            <Button bg="blue.900" size="lg" rightIcon={<BsArrowRight />}>
              View All Brands
            </Button>
          </Link>
        </VStack>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const sheets = await googleSheetsAuth();

  const investmentsResponse = await queryGoogleSheet(
    sheets,
    "investments!A1:Q"
  );
  const investmentsData = investmentsResponse.data.values;
  const investments = getJsonArrayFromData(investmentsData);

  const brandsResponse = await queryGoogleSheet(sheets, "brands!A1:S");
  const brandsData = brandsResponse.data.values;
  const brands = getJsonArrayFromData(brandsData);

  const totalPitches = brands.length;

  let moneyGivenForEquity = 0;
  let moneyGivenAsDebt = 0;

  investments.forEach(investment => {
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
    revalidate: 86400,
  };
}
