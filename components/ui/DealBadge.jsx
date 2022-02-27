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
}) => {
  return (
    <>
      {parseInt(sharksInDeal) ? (
        <Text color={successColor}>
          {successMsg}
          {parseInt(debtAmount)
            ? dealString(equityAmount, equity, debtAmount)
            : dealString(equityAmount, equity)}
        </Text>
      ) : (
        <Text color="red.500">No Deal</Text>
      )}
    </>
  );
};

export default DealBadge;
