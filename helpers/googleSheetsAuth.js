import { google } from "googleapis";

const googleSheetsAuth = async () => {
  const googleAuth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth: googleAuth });

  return sheets;
};

export default googleSheetsAuth;
