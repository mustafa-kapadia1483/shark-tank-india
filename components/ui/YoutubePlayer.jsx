import { AspectRatio } from "@chakra-ui/react";
import YouTubePlayer from "react-player/youtube";

const YoutubePlayer = ({ url, light = true, controls = true }) => {
  return (
    <AspectRatio
      minW={{ base: "100%", lg: "560px" }}
      ratio={16 / 9}
      overflow="hidden"
    >
      <YouTubePlayer
        controls={controls}
        light={light}
        width="100%"
        height="100%"
        url={url}
      />
    </AspectRatio>
  );
};

export default YoutubePlayer;
