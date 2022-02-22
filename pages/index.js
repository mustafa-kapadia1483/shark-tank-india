import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import AmountBadges from "../components/ui/AmountBadges";
import Hero from "../components/ui/Hero";
import getJsonArrayFromData from "../helpers/getJsonArrayFromData";
import googleSheetsAuth from "../helpers/googleSheetsAuth";
import numFormatter from "../helpers/numberFormatter";
import queryGoogleSheet from "../helpers/queryGoogleSheet";

export default function Home({
  moneyGivenAsDebt,
  moneyGivenForEquity,
  totalPitches,
}) {
  return (
    <>
      <Head>
        <title>Shark Tank India Stats</title>
      </Head>
      <Hero
        moneyOnEquity={numFormatter(moneyGivenForEquity)}
        moneyAsDebt={numFormatter(moneyGivenAsDebt)}
        totalBrands={totalPitches}
      />
      <Flex
        flexWrap="wrap"
        justifyContent="center"
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
      <Flex
        marginTop="10"
        maxWidth="full"
        justifyContent={["none", "center"]}
        position="relative"
      >
        <Image
          src="/sharktankindia-banner.png"
          width="694"
          height="440"
          alt="Banner Image"
          objectFit="fill"
        />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const sheets = await googleSheetsAuth();

  const range = "investments!B2:B95";
  const response = await queryGoogleSheet(sheets, "investments_cleaned!A1:L95");
  const data = response.data.values;
  const jsonData = getJsonArrayFromData(data);

  const totalPitches = jsonData.length;
  let moneyGivenForEquity = 0;
  let moneyGivenAsDebt = 0;

  jsonData.forEach(investment => {
    moneyGivenForEquity += parseInt(investment.invested_amount);
    moneyGivenAsDebt += parseInt(investment.debt);
  });

  return {
    props: {
      moneyGivenForEquity,
      moneyGivenAsDebt,
      totalPitches,
    },
  };
}
