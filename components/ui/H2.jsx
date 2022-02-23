import { Heading } from "@chakra-ui/react";

const H2 = ({ children, color }) => {
  return (
    <Heading
      color={color}
      as="h2"
      fontSize={["2xl", "4xl"]}
      textTransform="capitalize"
      fontWeight="extrabold"
      textAlign="center"
    >
      {children}
    </Heading>
  );
};

export default H2;
