import { Box, Text } from "@chakra-ui/react";
import H1 from "./H1";

const Hero = ({ moneyOnEquity, moneyAsDebt, totalBrands }) => {
  return (
    <Box as="section">
      <H1>
        <Text display="inline-block" color="blue.400">
          shark tank
        </Text>
        <Text ml="2" display="inline-block" color="yellow.300">
          india stats
        </Text>
      </H1>
    </Box>
  );
};

export default Hero;
