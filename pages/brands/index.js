import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useContext, useEffect, useState } from "react";
import BrandList from "../../components/ui/BrandList";
import H2 from "../../components/ui/H2";
import { Context } from "../../state/Context";

const BrandsPage = () => {
  const { brands, investments, setBrands, setInvestments } =
    useContext(Context);
  const [filtered, setFiltered] = useState(investments);
  const [deal, setDeal] = useState(false);
  const [sortVal, setSortVal] = useState(false);
  const [show, setShow] = useState(false);

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
    if (investments.length === 0) {
      setInvestments(JSON.parse(localStorage.getItem("investments")) || []);
      setBrands(JSON.parse(localStorage.getItem("brands")) || []);
    }
  }, []);

  useEffect(() => {
    setFiltered(investments);
    setFiltered(i => {
      let temp = i.filter(j =>
        deal
          ? deal === "deal"
            ? parseInt(j.sharks_in_deal) > 0
            : parseInt(j.sharks_in_deal) === 0
          : true
      );
      if (sortVal)
        temp = temp.sort((x, y) =>
          sortVal === "high"
            ? parseInt(y.deal_valuation || "0") -
              parseInt(x.deal_valuation || "0")
            : parseInt(x.deal_valuation || "0") -
              parseInt(y.deal_valuation || "0")
        );
      return temp;
    });
  }, [deal, investments, sortVal]);

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
            icon={show ? <ImCross /> : <FiFilter />}
            onClick={() => setShow(s => !s)}
            size={"lg"}
          />
        </InputGroup>
        {show && (
          <Stack
            direction={["column", "row"]}
            width="full"
            marginTop={3}
            borderRadius={10}
            borderWidth={0}
            borderColor="gray.700"
            spacing={["2.5", "5"]}
            p={3}
            borderWidth={"1px"}
            borderColor={"gray.700"}
          >
            <Select
              placeholder="Select Deal Outcome"
              size={"lg"}
              value={deal}
              width={"auto"}
              border={"none"}
              bg={"gray.700"}
              fontSize={["sm", "lg"]}
              onChange={e => setDeal(e.target.value)}
            >
              <option value={"deal"}>Got Deal</option>
              <option value={"no_deal"}>No Deal</option>
            </Select>
            <Select
              placeholder="Sort Valuation"
              size="lg"
              value={sortVal}
              width={"auto"}
              border={"none"}
              bg={"gray.700"}
              fontSize={["sm", "lg"]}
              onChange={e => setSortVal(e.target.value)}
            >
              <option value={"high"}>Highest to Lowest </option>
              <option value={"low"}>Lowest to Highest </option>
            </Select>
          </Stack>
        )}
        <Box marginTop="10" id="brands">
          <BrandList investments={filtered} brands={brands} />
        </Box>
      </Box>
    </>
  );
};

export default BrandsPage;
