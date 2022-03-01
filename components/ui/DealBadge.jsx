import { Text } from "@chakra-ui/react";
import numFormatter from "../../helpers/numberFormatter";

const dealString = (equityAmt, equityPercentage, debtAmt = null) => {
  let dealStr = `${numFormatter(
    parseFloat(equityAmt) * 100000
  )} for ${equityPercentage}%`;
  if (debtAmt)
    dealStr += ` and ${numFormatter(parseFloat(debtAmt) * 100000)} Debt`;
  return dealStr;
};
const DealBadge = ({
  equityAmount,
  equity,
  debtAmount,
  sharksInDeal,
  successMsg = "Deal Got: ",
  successColor = "green.500",
  dealValuation,
  breakLine = true,
  mt = 0,
}) => (
  <>
    {parseInt(sharksInDeal) ? (
      <Text mt={mt} color={successColor} whiteSpace="pre-line">
        {successMsg}
        {parseInt(debtAmount)
          ? dealString(equityAmount, equity, debtAmount)
          : dealString(equityAmount, equity)}
        {breakLine ? "\n" : " "}
        At Valuation: {numFormatter(dealValuation * 100000)}
      </Text>
    ) : (
      <Text mt={mt} color="red.500">
        No Deal
      </Text>
    )}
  </>
);

export default DealBadge;
