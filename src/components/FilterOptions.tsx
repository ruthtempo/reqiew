import { Box, Button, Stack } from "@chakra-ui/react";
import { CustomSelector } from "./Filters/CustomSelector";
import { DateRange } from "./Filters/DateRange";
import { PriceRange } from "./Filters/PriceRange";

export const Filters = () => {
  const devices: string[] = ["desktop", "mobile", "all devices"];
  const brands: string[] = ["Miele", "Bosch", "OK", "all brands"];
  const models: string[] = ["b300", "ultraMax", "super2000", "all models"];

  const clearAllFilters = () => {
    //reset everything
  };

  return (
    <>
      <Stack spacing={2} direction="row" my="4">
        <CustomSelector data={devices} buttonText={"Devices"} />
        <CustomSelector data={brands} buttonText={"Brands"} />
        <CustomSelector data={models} buttonText={"Models"} />
        <DateRange />
        <PriceRange />
        <Button
          borderRadius="3xl"
          variant={"ghost"}
          borderWidth="2px"
          borderColor="red.200"
          _hover={{ bg: "red.500", color: "white" }}
          onClick={clearAllFilters}
        >
          Clear Filters
        </Button>
      </Stack>

      <Box></Box>
    </>
  );
};
