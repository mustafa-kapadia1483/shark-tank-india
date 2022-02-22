import { Box, Text } from "@chakra-ui/react";

const AmountBadges = ({ amount, title }) => {
  return (
    <Box fontWeight="bold">
      <Text fontSize={["2xl", "4xl"]} color="yellow.300" mb="0">
        {amount}
      </Text>
      <Text fontSize="sm" color="blue.400" mt="-2" opacity="0.6">
        {title}
      </Text>
    </Box>
  );
};

export default AmountBadges;
