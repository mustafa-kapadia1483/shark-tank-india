import queryGoogleSheet from "./queryGoogleSheet";

export default async function getSheetsColumnNames(sheets, range) {
  const response = await queryGoogleSheet(sheets, range);
  return response.data.values;
}
