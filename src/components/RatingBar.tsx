import { Box, Progress, Text } from "@chakra-ui/react";

export const RatingBar = (p: {
  value: number;
  key: number;
  max: number;
  star: number;
  reviews: number;
}) => {
  return (
    <Box>
      <Text fontSize="xs">{p.star}/5</Text>
      <Progress
        bg={"gray.100"}
        colorScheme={"teal"}
        value={p.value}
        max={p.max}
        m={4}
        key={p.key}
        borderRadius="sm"
      />
      <Text fontSize="xs">{p.reviews}</Text>
    </Box>
  );
};
