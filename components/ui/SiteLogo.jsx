import { HStack, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { MdQueryStats } from "react-icons/md";

const SiteLogo = () => (
  <HStack fontSize="lg" color="blue.100">
    <Icon as={MdQueryStats} />
    <Link href="/">STI</Link>
  </HStack>
);

export default SiteLogo;
