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
const DealBadge = ({ dealAmount, dealEquity, dealDebt, sharksInDeal }) => {
  return (
    <>
      {parseInt(sharksInDeal) ? (
        <Text color="green.500">
          Deal Got:{" "}
          {parseInt(dealDebt)
            ? dealString(dealAmount, dealEquity, dealDebt)
            : dealString(dealAmount, dealEquity)}
        </Text>
      ) : (
        <Text color="red.500">No Deal</Text>
      )}
    </>
  );
};

export default DealBadge;
