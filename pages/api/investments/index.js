import getJsonArrayFromData from "../../../helpers/getJsonArrayFromData";
import googleSheetsAuth from "../../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../../helpers/queryGoogleSheet";

const handler = async (req, res) => {
  const sheets = await googleSheetsAuth();
  const response = await queryGoogleSheet(sheets, "investments!A1:P122");
  const data = response.data.values;
  const jsonData = getJsonArrayFromData(data);
  if (jsonData) {
    res.status(200).json(jsonData);
  }
};

export default handler;
