import { Heading } from "@chakra-ui/react";

const H1 = ({ children, textAlign = "left", ...rest }) => {
  return (
    <Heading
      as="h1"
      fontSize={["3xl", "5xl"]}
      textTransform="capitalize"
      fontWeight="extrabold"
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default H1;
