import Head from "next/head";
import { Fragment } from "react";
import getJsonArrayFromData from "../helpers/getJsonArrayFromData";
import googleSheetsAuth from "../helpers/googleSheetsAuth";
import queryGoogleSheet from "../helpers/queryGoogleSheet";

export default function Home({
  moneyGivenAsDebt,
  moneyGivenForEquity,
  totalPitches,
}) {
  function numDifferentiation(val) {
    if (val >= 10000000) val = (val / 10000000).toFixed(2) + " Cr";
    else if (val >= 100000) val = (val / 100000).toFixed(2) + " Lac";
    else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    return val;
  }
  return (
    <Fragment>
      <Head>
        <title>Shark Tank India Stats</title>
      </Head>
      <p>Money Spent On Equity: {numDifferentiation(moneyGivenForEquity)}</p>
      <p>Money Spent As Debt: {numDifferentiation(moneyGivenAsDebt)}</p>
      <p>Total Pitches/Brands: {totalPitches}</p>
    </Fragment>
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
