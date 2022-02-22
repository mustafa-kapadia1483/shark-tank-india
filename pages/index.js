import Head from "next/head";
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
      <p>Money Spent On Equity: {numFormatter(moneyGivenForEquity)}</p>
      <p>Money Spent As Debt: {numFormatter(moneyGivenAsDebt)}</p>
      <p>Total Pitches/Brands: {totalPitches}</p>
    </>
  );
}

export async function getStaticProps() {
  const sheets = await googleSheetsAuth();

  // Brand id from the url
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
