import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = ({ moneyOnEquity, moneyAsDebt, totalBrands }) => {
  return (
    <Box as="section">
      <Heading
        as="h1"
        fontSize="5xl"
        textTransform="capitalize"
        fontWeight="extrabold"
        textAlign="center"
      >
        <Text display="inline-block" color="blue.400">
          shark tank
        </Text>
        <Text ml="2" display="inline-block" color="yellow.400">
          india stats
        </Text>
      </Heading>
    </Box>
  );
};

export default Hero;
