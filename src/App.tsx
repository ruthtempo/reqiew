import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Filters } from "./components/FilterOptions";
import { Results } from "./components/Results";
import { ReviewsCard } from "./components/ReviewsCard";
import { VersionCard } from "./VersionCard";
import { productData } from "./_DATA";

function App() {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [dateRangeSelection, setDateRangeSelection] = useState<
    [Date | undefined, Date | undefined]
  >([undefined, undefined]);

  const [priceRangeSelection, setpriceRangeSelection] = useState<
    [number | undefined, number | undefined]
  >([undefined, undefined]);

  const filteredEntities = productData.filter(
    (entity) =>
      (selectedDevices.includes(entity.type) || selectedDevices.length === 0) &&
      (selectedBrands.includes(entity.brand) || selectedBrands.length === 0) &&
      (selectedModels.includes(entity.model) || selectedModels.length === 0) &&
      //date
      (dateRangeSelection[0] === undefined ||
        new Date(entity.date) > dateRangeSelection[0]) &&
      (dateRangeSelection[1] === undefined ||
        new Date(entity.date) < dateRangeSelection[1]) &&
      //price
      (priceRangeSelection[0] === undefined ||
        priceRangeSelection[0] < entity.price) &&
      (priceRangeSelection[1] === undefined ||
        priceRangeSelection[1] > entity.price)
  );

  return (
    <>
      <Filters
        productData={productData}
        selectedDevices={selectedDevices}
        selectedBrands={selectedBrands}
        selectedModels={selectedModels}
        setSelectedDevices={setSelectedDevices}
        setSelectedBrands={setSelectedBrands}
        setSelectedModels={setSelectedModels}
        dateRangeSelection={dateRangeSelection}
        setDateRangeSelection={setDateRangeSelection}
        priceRangeSelection={priceRangeSelection}
        setPriceRangeSelection={setpriceRangeSelection}
      />
      <Heading as="h2" size="md" textAlign="center" py={3}>
        Aspect-based Sentiment:BBQ
      </Heading>
      <Flex gap={3}>
        <Box display="flex" flexDirection="column" gap={4}>
          <ReviewsCard
            productData={filteredEntities}
            title="Reliable Reviews"
            subtitle={"Anti-spam filtered reviews"}
            barColor="teal"
            tagBg="teal"
            starColor="teal"
          />
          <VersionCard />
        </Box>
        <Box flexGrow={1}>
          <Results productData={filteredEntities} />
        </Box>
      </Flex>
    </>
  );
}

export default App;
