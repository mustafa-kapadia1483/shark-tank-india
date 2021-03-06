import getJsonArrayFromData from "../../../helpers/getJsonArrayFromData";
import getSheetsColumnNames from "../../../helpers/getSheetsColumnNames";
import googleSheetsAuth from "../../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../../helpers/queryGoogleSheet";

const sheetName = "brands";
let columnNames = null;

const handler = async (req, res) => {
  const { brandId } = req.query;
  const sheets = await googleSheetsAuth();
  if (!columnNames) {
    columnNames = await getSheetsColumnNames(sheets, `${sheetName}!A1:U1`);
  }

  const brandRow = parseInt(brandId) + 1;
  const response = await queryGoogleSheet(
    sheets,
    `${sheetName}!A${brandRow}:U${brandRow}`
  );

  const data = response.data.values;
  const jsonData = getJsonArrayFromData(columnNames.concat(data));
  res.status(200).json(jsonData[0]);
};

export default handler;
