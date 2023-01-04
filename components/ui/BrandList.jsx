import { Flex, Grid } from "@chakra-ui/react";
import BrandCard from "./BrandCard";

const BrandList = ({ investments, brands }) => {
  return (
    <Grid
      marginTop={"10"}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap="10"
    >
      {investments.map(investment => (
        <BrandCard
          key={`${investment.brand_id}-brand_card`}
          investment={investment}
          brand={brands[investment.brand_id - 1]}
        />
      ))}
    </Grid>
  );
};

export default BrandList;
