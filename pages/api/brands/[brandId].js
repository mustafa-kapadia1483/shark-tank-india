import googleSheetsAuth from "../../../helpers/googleSheetsAuth";
import queryGoogleSheet from "../../../helpers/queryGoogleSheet";

const handler = async (req, res) => {
  const { brandId } = req.query;

  const sheets = await googleSheetsAuth();
  const brandRow = parseInt(brandId) + 1;
  const response = await queryGoogleSheet(
    sheets,
    `brands!A${brandRow}:C${brandRow}`
  );
  const data = response.data.values[0];
  const jsonData = {
    id: data[0],
    name: data[1],
    idea: data[2],
  };

  res.status(200).json({ brand: jsonData });
};

export default handler;
