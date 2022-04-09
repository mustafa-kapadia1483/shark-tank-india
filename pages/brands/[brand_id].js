import {
  Badge,
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  BsChevronDown,
  BsChevronUp,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Head from "next/head";
import Image from "next/image";
import DealBadge from "../../components/ui/DealBadge";
import H2 from "../../components/ui/H2";
import googleSheetsAuth from "../../helpers/googleSheetsAuth";
import isNA from "../../helpers/isNA";
import queryGoogleSheet from "../../helpers/queryGoogleSheet";
import YoutubePlayer from "../../components/ui/YoutubePlayer";

const SocialAccountButton = ({
  url,
  icon: Icon,
  colorScheme = "gray",
  text,
}) => (
  <Link href={url} isExternal>
    <Button
      leftIcon={<Icon />}
      colorScheme={colorScheme}
      variant="link"
      size="sm"
    >
      {text}
    </Button>
  </Link>
);

const IndividualBrandPage = ({ investment, brand }) => {
  const [
    sharks_in_deal,
    ask_amount,
    ask_equity,
    ask_valuation,
    deal_amount,
    deal_equity,
    deal_debt,
    deal_valuation,
    ashneer,
    namita,
    anupam,
    vineeta,
    aman,
    peyush,
    ghazal,
  ] = investment;
  const [
    brand_id,
    brand_name,
    idea,
    industry,
    started_in,
    pitchers_city,
    pitchers_state,
    website,
    instagram,
    twitter,
    linkedin,
    founder_1,
    founder_2,
    founder_3,
    founder_4,
    icon,
    seasonNo,
    episodeNo,
    episodeTitle,
    about,
    youtubeLink,
  ] = brand;
  const sharks = [
    { name: "Ashneer", invested: ashneer },
    { name: "Namita", invested: namita },
    { name: "Anupam", invested: anupam },
    { name: "Vineeta", invested: vineeta },
    { name: "Aman", invested: aman },
    { name: "Peyush", invested: peyush },
    { name: "Ghazal", invested: ghazal },
  ];

  const founders = [founder_1, founder_2, founder_3, founder_4].filter(
    founder => !isNA(founder)
  );

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Head>
        <title>{brand_name}</title>
        <meta
          name="description"
          content={about ? about.substring(0, 160) : idea}
        />
        {website && (
          <link
            rel="icon"
            type="image/x-icon"
            href={`https://s2.googleusercontent.com/s2/favicons?domain=${website}`}
          />
        )}
      </Head>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        spacing={{ base: "5", md: "none" }}
      >
        <HStack spacing="4" align="flex-start">
          <Box>
            {!isNA(icon) && (
              <Image
                src={icon}
                width="80px"
                height="80px"
                objectFit="contain"
                objectPosition="center"
                alt={`${brand_name} logo`}
              />
            )}
          </Box>
          <VStack align={"flex-start"}>
            <Box>
              <Text as="h1" fontSize="xl" fontWeight="bold">
                {brand_name}
              </Text>
              <Badge>{industry}</Badge>
            </Box>
            <Text fontSize="sm" color="gray.400">
              <Icon
                as={IoLocationOutline}
                boxSize="3"
                verticalAlign="center"
                marginRight="1"
              />
              {pitchers_city},&nbsp;{pitchers_state}
            </Text>
          </VStack>
        </HStack>
        <VStack
          align={["flex-start", "flex-end"]}
          spacing={{ base: "5", md: "2.5" }}
        >
          <Box
            py={["3", "2"]}
            px="4"
            bg="gray.900"
            borderRadius="lg"
            borderWidth="1px"
            borderColor={["gray.600", "gray.700"]}
            boxShadow="xl"
          >
            <DealBadge
              equityAmount={ask_amount}
              equity={ask_equity}
              sharksInDeal={1}
              successMsg="Original Ask: "
              successColor="gray.400"
              dealValuation={ask_valuation}
              breakLine={false}
            />
            <DealBadge
              equityAmount={deal_amount}
              equity={deal_equity}
              debtAmount={deal_debt}
              sharksInDeal={sharks_in_deal}
              dealValuation={deal_valuation}
              breakLine={false}
              mt={2}
            />
          </Box>
          {sharks_in_deal > 0 && (
            <HStack>
              <Text>Investment By:</Text>
              <HStack wrap={"wrap"} rowGap="2.5">
                {sharks.map(({ invested, name }) => (
                  <>
                    {!isNA(invested) && (
                      <Badge key={name} colorScheme="purple">
                        {name}
                      </Badge>
                    )}
                  </>
                ))}
              </HStack>
            </HStack>
          )}
        </VStack>
      </Stack>
      <Box marginTop="10" order={{ lg: "2" }}>
        <Stack
          justify={{ md: "space-between" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box>
            <Text as="h3" fontSize={{ base: "lg", md: "xl" }}>
              Idea: {idea}
            </Text>
            <Text mt="1" color="gray.200">
              Founders: {founders && founders.join(", ")}
            </Text>
            <HStack mt="3" gap={["1", "5"]} wrap="wrap" justify="flex-start">
              {!isNA(website) && (
                <SocialAccountButton
                  url={website}
                  text="Website"
                  icon={BsGlobe}
                />
              )}
              {!isNA(instagram) && (
                <SocialAccountButton
                  url={instagram}
                  text="Instagram"
                  icon={BsInstagram}
                  colorScheme="pink"
                />
              )}
              {!isNA(twitter) && (
                <SocialAccountButton
                  url={`https://twitter.com/${twitter}`.replace("@", "")}
                  text="Twitter"
                  icon={BsTwitter}
                  colorScheme="twitter"
                />
              )}
              {!isNA(linkedin) && (
                <SocialAccountButton
                  url={linkedin}
                  text="LinkedIn"
                  icon={BsLinkedin}
                  colorScheme="linkedin"
                />
              )}
            </HStack>
            <Tag
              mt={["2", "5"]}
              mb={{ base: "4", lg: "0" }}
              py="2.5"
              px="5"
              lineHeight="5"
              color="gray.400"
              colorScheme="teal"
            >
              Season {seasonNo}, Episode: {episodeNo} <br />
              Titled: {episodeTitle}
            </Tag>
          </Box>
          <YoutubePlayer url={youtubeLink} />
        </Stack>
      </Box>
      <Box marginTop="10">
        <H2 fontSize={["xl", "2xl"]}>About {brand_name}</H2>
        {about && (
          <VStack align="flex-end" mt={2}>
            <Collapse startingHeight="20" in={isOpen}>
              <Text noOfLines={isOpen ? "none" : 3} as="p" color="gray.300">
                {about}
              </Text>
            </Collapse>
            <Button
              onClick={onToggle}
              variant="outline"
              size="sm"
              rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
            >
              {isOpen ? "Read Less" : "Read More"}
            </Button>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default IndividualBrandPage;

export async function getServerSideProps({ query }) {
  // Brand id from the url
  const { brand_id } = query;
  if (!parseInt(brand_id)) {
    return {
      notFound: true,
    };
  }
  const sheets = await googleSheetsAuth();
  const row_id = parseInt(brand_id) + 1;
  const investmentRange = `investments!B${row_id}:P${row_id}`;
  const investmentResponse = await queryGoogleSheet(sheets, investmentRange);

  const brandRange = `brands!A${row_id}:U${row_id}`;
  const brandResponse = await queryGoogleSheet(sheets, brandRange);

  // Result
  const investment = investmentResponse.data.values[0];
  const brand = brandResponse.data.values[0];
  return {
    props: {
      investment,
      brand,
    },
  };
}
