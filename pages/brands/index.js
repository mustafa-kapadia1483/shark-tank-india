import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  IconButton,
  Stack,
  HStack,
  Collapse,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useContext, useEffect, useState } from "react";
import BrandList from "../../components/ui/BrandList";
import H2 from "../../components/ui/H2";
import { Context } from "../../state/Context";
import Head from "next/head";
import Image from "next/image";

const BrandsPage = () => {
  const { brands, investments, setBrands, setInvestments } =
    useContext(Context);
  const [filtered, setFiltered] = useState(investments);
  const [deal, setDeal] = useState(false);
  const [sortVal, setSortVal] = useState(false);
  const [selectIndustry, setSelectIndustry] = useState(false);
  const [show, setShow] = useState(false);

  const search = e => {
    const text = e.target.value;
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
      if (selectIndustry)
        temp = temp.filter(
          t => brands[t.brand_id - 1].industry === selectIndustry
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
  }, [deal, investments, sortVal, selectIndustry]);

  const industries = [];
  for (const brand of brands) {
    industries.push(brand.industry);
  }
  const uniqueIndustries = [...new Set(industries)];

  const sortValuationHandler = e => {
    setSortVal(e.target.value);
    setDeal("deal");
  };

  const setDealHandler = e => {
    if (e.target.value === "no_deal" && sortVal) {
      setSortVal(false);
    }
    setDeal(e.target.value);
  };

  const selectIndustryHandler = e => {
    setSelectIndustry(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Brands on Shark Tank India</title>
      </Head>
      <Box mt="24">
        <H2 color="yellow.300" textAlign="center">
          Brands
        </H2>

        <HStack mt={10}>
          <InputGroup justifyContent="space-between">
            <InputLeftElement pointerEvents="none" mt={1}>
              <SearchIcon color="blue.100" />
            </InputLeftElement>
            <Input
              size={"lg"}
              type={"search"}
              placeholder="Search Brands"
              onChange={search}
            />
          </InputGroup>
          <IconButton
            aria-label="Filter Investments"
            icon={show ? <ImCross /> : <FiFilter />}
            onClick={() => setShow(s => !s)}
            size={"lg"}
          />
        </HStack>
        <Collapse
          in={show}
          transition={{ enter: { duration: 0.2 } }}
          animateOpacity
        >
          <Stack
            direction={["column", "row"]}
            width="full"
            marginTop={3}
            borderRadius={10}
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
              fontSize={["sm", "md"]}
              onChange={setDealHandler}
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
              fontSize={["sm", "md"]}
              onChange={sortValuationHandler}
            >
              <option value={"high"}>High to Low </option>
              <option value={"low"}>Low to High </option>
            </Select>
            <Select
              placeholder="Select Industry"
              size="lg"
              value={selectIndustry}
              width={"auto"}
              border={"none"}
              bg={"gray.700"}
              fontSize={["sm", "md"]}
              onChange={selectIndustryHandler}
            >
              {uniqueIndustries.map(industry => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </Select>
          </Stack>
        </Collapse>
        <Box marginTop="10" id="brands">
          {filtered.length === 0 && (
            <VStack textAlign="center">
              <Text mb="4" color="gray.400">
                No Results found, please try again
              </Text>
              <Image
                src="https://etetamyl.sirv.com/icons/shark-tank-india-images/ashneer-time-barbaad.jpg"
                width="533.77"
                height="300"
              />
            </VStack>
          )}
          <BrandList investments={filtered} brands={brands} />
        </Box>
      </Box>
    </>
  );
};

export default BrandsPage;
