const queryGoogleSheet = async (sheets, range) => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  return response;
};

export default queryGoogleSheet;
