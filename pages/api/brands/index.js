import googleSheetsAuth from "../../../helpers/googleSheetsAuth";

const handler = async (req, res) => {
  const sheets = await googleSheetsAuth();

  // Brand id from the url
  const range = "brands!A2:C118";
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  const data = response.data.values;

  if (data) {
    res.status(200).json({ brands: data });
  }
};

export default handler;
