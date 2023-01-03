import { Flex } from "@chakra-ui/react";
import BrandCard from "./BrandCard";

const BrandList = ({ investments, brands }) => {
  return (
    <Flex
      as="ul"
      marginTop={"10"}
      flexWrap="wrap"
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      gap="10"
    >
      {investments.map(investment => (
        <>
          <BrandCard
            key={`${investment.brand_id}-card`}
            investment={investment}
            brand={brands[investment.brand_id - 1]}
          />
        </>
      ))}
    </Flex>
  );
};

export default BrandList;
