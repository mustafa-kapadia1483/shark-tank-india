import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  IconButton,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import BrandList from "../../components/ui/BrandList";
import H2 from "../../components/ui/H2";
import { Context } from "../../state/Context";

const BrandsPage = () => {
  const { brands, investments, setBrands, setInvestments } =
    useContext(Context);
  const [filtered, setFiltered] = useState(investments);
  const [deal, setDeal] = useState(false);

  const search = text => {
    let filteredName = filtered.filter(i => {
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

  // const fetcher =  (url) => fetch(url).then((res) => res.json());

  // const { data: brand, error: e1 } = useSWR("/api/brands", fetcher);
  // setBrands(brand);
  // const { data: invest, error: e2 } = useSWR("/api/investments", fetcher);
  // setInvestments(invest);

  useEffect(() => {
    setFiltered(investments);
    setFiltered(i =>
      i.filter(j =>
        deal
          ? deal === "deal"
            ? parseInt(j.sharks_in_deal) > 0
            : parseInt(j.sharks_in_deal) === 0
          : true
      )
    );
  }, [deal]);

  return (
    <>
      <Box mt="24">
        <H2 color="yellow.300" textAlign="center">
          Brands
        </H2>

        <InputGroup mt={10} justifyContent="space-between">
          <InputLeftElement pointerEvents="none" mt={1}>
            <SearchIcon color="blue.100" />
          </InputLeftElement>
          <Input
            size={"lg"}
            type={"search"}
            placeholder="Search Brands"
            onChange={e => search(e.target.value)}
            width={"95%"}
          />
          <IconButton
            aria-label="Filter Investments"
            icon={<FiFilter />}
            size={"lg"}
          />
          {/* <Select
            placeholder="Select option"
            width={"15%"}
            size="lg"
            onChange={(e) => setDeal(e.target.value)}
          >
            <option value={"deal"}>Got Deal</option>
            <option value={"no_deal"}>No Deal</option>
          </Select> */}
        </InputGroup>

        <Box marginTop="10" id="brands">
          <BrandList investments={filtered} brands={brands} />
        </Box>
      </Box>
    </>
  );
};

export default BrandsPage;
