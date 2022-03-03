import { Box, Flex, Text } from "@chakra-ui/react";

const AmountBadges = ({ amount, title }) => {
  return (
    <Flex fontWeight="bold" direction={"column"} align={"center"}>
      <Text fontSize={["2xl", "4xl"]} color="yellow.300" mb="0">
        {amount}
      </Text>
      <Text fontSize="sm" color="blue.400" mt="-2" opacity="0.6">
        {title}
      </Text>
    </Flex>
  );
};

export default AmountBadges;
