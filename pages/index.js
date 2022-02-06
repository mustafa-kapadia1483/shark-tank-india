import { Fragment } from "react";
import { google } from "googleapis";

export default function Home(props) {
  function numDifferentiation(val) {
    if (val >= 10000000) val = (val / 10000000).toFixed(2) + " Cr";
    else if (val >= 100000) val = (val / 100000).toFixed(2) + " Lac";
    else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    return val;
  }
  return (
    <Fragment>
      Money Spent On Equity: {numDifferentiation(props.moneyGivenForEquity)}{" "}
    </Fragment>
  );
}

export async function getStaticProps() {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Brand id from the url
  const range = "investments!B2:B95";
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  const data = response.data.values;

  const totalPitches = data.length;
  let moneyGivenForEquity = 0;
  let moneyGivenAsDebt = 0;

  const calculateTotalSpentOnEquity = deal => {
    if (deal.search("no deal") == -1) {
      if (deal.search("lakhs") == 3 || deal.search("lakh") == 2) {
        let moneyForEquity = parseInt(deal) * 100000;
        moneyGivenForEquity += moneyForEquity;
      } else if (
        deal.search("crore") < deal.length - 4 &&
        deal.search("crore") !== -1
      ) {
        let moneyForEquity = parseFloat(deal) * 10000000;
        moneyGivenForEquity += moneyForEquity;
      } else {
        let moneyForEquity = parseInt(deal);
        moneyGivenForEquity += moneyForEquity;
      }
    }
  };

  if (data) {
    for (let i = 0; i < totalPitches; i++) {
      calculateTotalSpentOnEquity(data[i][0].toLowerCase());
    }
  }

  return {
    props: {
      moneyGivenForEquity,
    },
  };
}
