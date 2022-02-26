export default function numFormatter(val, floorFlag = false) {
  let suffix = "";
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(2);
    suffix = "Cr";
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(2);
    suffix = "Lac";
  } else if (val >= 1000) {
    val = (val / 1000).toFixed(2);
    suffix = "K";
  }
  if (floorFlag) val = Math.floor(val);
  return val + "" + suffix;
}
