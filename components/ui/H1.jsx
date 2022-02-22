import { Heading } from "@chakra-ui/react";

const H1 = ({ children }) => {
  return (
    <Heading
      as="h1"
      fontSize={["3xl", "5xl"]}
      textTransform="capitalize"
      fontWeight="extrabold"
      textAlign="center"
    >
      {children}
    </Heading>
  );
};

export default H1;
