import handler from "../pages/api/brands";

export default function getJsonArrayFromData(data) {
  let obj = {};
  const result = [];
  const headers = data[0];
  const cols = headers.length;
  let row = [];

  for (let i = 1, l = data.length; i < l; i++) {
    // get a row to fill the object
    row = data[i];
    // clear object
    obj = {};
    for (let col = 0; col < cols; col++) {
      // fill object with new values
      obj[headers[col]] = row[col];
    }
    // add object in a final result
    result.push(obj);
  }

  return result;
}
