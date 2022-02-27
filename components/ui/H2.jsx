import { Heading } from "@chakra-ui/react";

const H2 = ({
  children,
  color,
  textAlign = "left",
  fontSize = ["2xl", "4xl"],
}) => {
  return (
    <Heading
      color={color}
      as="h2"
      fontSize={fontSize}
      textTransform="capitalize"
      fontWeight="extrabold"
      textAlign={textAlign}
    >
      {children}
    </Heading>
  );
};

export default H2;
