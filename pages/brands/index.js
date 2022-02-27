import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext, useState } from "react";
import BrandList from "../../components/ui/BrandList";
import H2 from "../../components/ui/H2";
import { Context } from "../../state/Context";

const BrandsPage = () => {
  const { brands, investments } = useContext(Context);
  const [filtered, setFiltered] = useState(investments);

  const search = (text) => {
    let filteredName = investments.filter((i) => {
      return brands[i.brand_id - 1].brand_name
        .toLowerCase()
        .match(text.toLowerCase());
    });
    if (!text || text === "") {
      setFiltered(investments);
    } else if (Array.isArray(filteredName)) {
      setFiltered(filteredName);
    }
  };

  return (
    <>
      <Box mt="24">
        <H2 color="yellow.300">Brands</H2>
        <InputGroup mt={10} width={"90%"}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="blue.100" />}
            mt={1}
          />
          <Input
            size={"lg"}
            type={"search"}
            placeholder="Search Brands"
            onChange={(e) => search(e.target.value)}
          />
        </InputGroup>

        <Box marginTop="10" id="brands">
          <BrandList investments={filtered} brands={brands} />
        </Box>
      </Box>
    </>
  );
};

export default BrandsPage;
