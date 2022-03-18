import getJsonArrayFromData from "../../../helpers/getJsonArrayFromData";
import getSheetsColumnNames from "../../../helpers/getSheetsColumnNames";
import googleSheetsAuth from "../../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../../helpers/queryGoogleSheet";

const sheetName = "investments";
let columnNames = null;

const handler = async (req, res) => {
  const { brandId } = req.query;

  const sheets = await googleSheetsAuth();
  if (!columnNames) {
    columnNames = await getSheetsColumnNames(sheets, `${sheetName}!A1:P1`);
  }

  const brandRow = parseInt(brandId) + 1;
  const response = await queryGoogleSheet(
    sheets,
    `${sheetName}!A${brandRow}:P${brandRow}`
  );
  const data = response.data.values;
  const jsonData = getJsonArrayFromData(columnNames.concat(data));
  if (jsonData) {
    res.status(200).json(jsonData[0]);
  }
};

export default handler;
