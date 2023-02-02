import { Box, Icon } from "@chakra-ui/react";

import { MdStarHalf, MdStarRate, MdStarOutline } from "react-icons/md";

export const StarRating = ({}) => {
  return (
    <Box
      style={{ backgroundColor: "yellow" }}
      display="flex"
      alignItems="center"
      flexDirection="row"
    >
      <Icon as={MdStarOutline} boxSize={15} color="green" />
      <Icon as={MdStarOutline} boxSize={15} />
      <Icon as={MdStarOutline} boxSize={15} />
      <Icon as={MdStarOutline} boxSize={15} />
      <Icon as={MdStarOutline} boxSize={15} />
    </Box>
  );
};
