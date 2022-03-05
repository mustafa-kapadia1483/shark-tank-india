import os from "os";
import { promises as fsp } from "fs";
import path from "path";
import { google } from "googleapis";

let isSecretsJson = false;

const createSecretsJson = () => {
  const baseDir = await fsp.mkdtemp(
    (await fsp.realpath(os.tmpdir())) + path.sep
  );
  const fileName = path.join(baseDir, "credentials.json");
  const buffer = Buffer.from(process.env.GOOGLE_CREDENTIALS, "base64");
  await fsp.writeFile(fileName, buffer);

  process.env["GOOGLE_APPLICATION_CREDENTIALS"] = fileName;

  return true;
};

const googleSheetsAuth = async () => {
  if (!isSecretsJson) {
    isSecretsJson = createSecretsJson();
  }
  const googleAuth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth: googleAuth });

  return sheets;
};

export default googleSheetsAuth;
