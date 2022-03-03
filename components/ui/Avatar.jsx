import Image from "next/image";
import { Box } from "@chakra-ui/react";

const BrandAvatar = ({ imageSrc, alt = "" }) => {
  return (
    <Box
      width="128px"
      height="128px"
      borderRadius="full"
      overflow="hidden"
      position="relative"
    >
      <Image src={imageSrc} alt={alt} objectFit="contain" layout="fill" />
    </Box>
  );
};

export default BrandAvatar;
