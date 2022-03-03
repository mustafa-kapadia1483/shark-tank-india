const isNA = val => {
  if (val === "NA" || val === "FALSE") return true;
  return false;
};

export default isNA;
