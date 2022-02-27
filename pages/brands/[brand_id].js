import { google } from "googleapis";

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Brand id from the url
  const { brand_id } = query;
  const row_id = parseInt(brand_id) + 1;
  const range = `investments!A${row_id}:C${row_id}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Result
  const [id, deal_got] = response.data.values[0];
  return {
    props: {
      id,
      deal_got,
    },
  };
}

export default function InvestmentDetails({ id, deal_got }) {
  return (
    <article>
      <h1>Pitch No: {id}</h1>
      <h2>Deal Got: {deal_got}</h2>
    </article>
  );
}
