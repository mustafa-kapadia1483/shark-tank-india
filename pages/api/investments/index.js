import getJsonArrayFromData from "../../../helpers/getJsonArrayFromData";
import googleSheetsAuth from "../../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../../helpers/queryGoogleSheet";

const handler = async (req, res) => {
  const sheets = await googleSheetsAuth();
  const response = await queryGoogleSheet(sheets, "investments_cleaned!A1:L95");
  const data = response.data.values;
  const jsonData = getJsonArrayFromData(data);
  if (jsonData) {
    res.status(200).json(jsonData);
  }
};

export default handler;
