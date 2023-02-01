import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";

export const Filters = () => {
  return (
    <Stack spacing={4} direction="row" my="4">
      <Button rightIcon={<ChevronDownIcon />}>Device type</Button>
      <Button>Brand</Button>
      <Button>Model</Button>
      <Button>Date</Button>
      <Button>Price</Button>
      <Button>Clear Filters</Button>
    </Stack>
  );
};
