import googleSheetsAuth from "../../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../../helpers/queryGoogleSheet";

const handler = async (req, res) => {
  const sheets = await googleSheetsAuth();

  // Brand id from the url
  const response = await queryGoogleSheet(sheets, "brands!A2:C118");
  const data = response.data.values;

  if (data) {
    res.status(200).json({ brands: data });
  }
};

export default handler;
