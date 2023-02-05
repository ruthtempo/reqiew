import { Button, Stack } from "@chakra-ui/react";
import { max, min } from "date-fns/esm";
import { useState } from "react";
import { Entity, productData } from "../_DATA";
import { CustomSelector } from "./Filters/CustomSelector";
import { DateRange } from "./Filters/DateRange";
import { PriceRange } from "./Filters/PriceRange";

export const Filters = (p: {
  productData: Entity[];
  selectedDevices: string[];
  selectedBrands: string[];
  selectedModels: string[];
  setSelectedDevices: (devices: string[]) => void;
  setSelectedBrands: (brands: string[]) => void;
  setSelectedModels: (models: string[]) => void;
  dateRangeSelection: [Date | undefined, Date | undefined];
  setDateRangeSelection: (value: [Date | undefined, Date | undefined]) => void;
  priceRangeSelection: [number | undefined, number | undefined];
  setPriceRangeSelection: (
    value: [number | undefined, number | undefined]
  ) => void;
}) => {
  const devices: string[] = p.productData
    .map((entity) => entity.type)
    .filter((type, index, self) => self.indexOf(type) === index);

  const brands: string[] = p.productData
    .map((entity) => entity.brand)
    .filter((brand, index, self) => self.indexOf(brand) === index);

  const models: string[] = p.productData
    .map((entity) => entity.model)
    .filter((model, index, self) => self.indexOf(model) === index);

  //dates
  const startDate = min(productData.map((entity) => new Date(entity.date)));
  const endDate = max(productData.map((entity) => new Date(entity.date)));

  //prices
  const minPrice = Math.min(...productData.map((item) => item.price));
  const maxPrice = Math.max(...productData.map((item) => item.price));

  // const [startPrice, setStartPrice] = useState(minPrice);
  // const [endPrice, setEndPrice] = useState(maxPrice);

  //clear filters
  const clearAllFilters = () => {
    p.setSelectedDevices([]);
    p.setSelectedBrands([]);
    p.setSelectedModels([]);
    p.setDateRangeSelection([undefined, undefined]);
    p.setPriceRangeSelection([undefined, undefined]);
  };

  return (
    <>
      <Stack spacing={2} direction="row" my="4">
        <CustomSelector
          data={devices}
          buttonText={"Devices"}
          selectedElements={p.selectedDevices}
          onChange={p.setSelectedDevices}
        />
        <CustomSelector
          data={brands}
          buttonText={"Brands"}
          selectedElements={p.selectedBrands}
          onChange={p.setSelectedBrands}
        />
        <CustomSelector
          data={models}
          buttonText={"Models"}
          selectedElements={p.selectedModels}
          onChange={p.setSelectedModels}
        />
        <DateRange
          range={[startDate, endDate]}
          value={[
            p.dateRangeSelection[0] ?? startDate, //selection or default value
            p.dateRangeSelection[1] ?? endDate,
          ]}
          onChange={p.setDateRangeSelection}
        />
        <PriceRange
          min={minPrice}
          max={maxPrice}
          priceRange={[
            p.priceRangeSelection[0] ?? minPrice,
            p.priceRangeSelection[1] ?? maxPrice,
          ]}
          onChange={p.setPriceRangeSelection}
        />
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
    </>
  );
};
