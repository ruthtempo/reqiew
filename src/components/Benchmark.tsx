import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { productData } from "../_DATA";
import { ReviewsCard } from "./ReviewsCard";
import { Chart } from "./Chart";
import { ChartTotal } from "./ChartTotal";
import { AspectsChart } from "./AspectsChart";

export const Benchmark = () => {
  const entities = [productData[5], productData[6]];

  return (
    <Box>
      <Stack spacing={2} direction="row" my="8">
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={"gray"}
        >
          Device Type
        </Button>
        <Stack>
          {Array.from({ length: 2 }).map((_, i) => (
            <Button flexGrow={1} bg={i === 0 ? "purple" : "teal"} color="white">
              Brand
            </Button>
          ))}
        </Stack>
        <Stack>
          {Array.from({ length: 2 }).map((_, i) => (
            <Button
              flexGrow={1}
              rightIcon={<ChevronDownIcon />}
              bg={i === 0 ? "purple" : "teal"}
              color="white"
            >
              Model
            </Button>
          ))}
        </Stack>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={"gray"}
        >
          Date
        </Button>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={"gray"}
        >
          Price
        </Button>

        <Button
          borderRadius="3xl"
          variant={"ghost"}
          borderWidth="2px"
          borderColor="red.200"
          _hover={{ bg: "red.500", color: "white" }}
        >
          Clear Filters
        </Button>
      </Stack>
      <Flex gap={5} justifyContent="space-around" my={3}>
        <Box>
          <Heading
            mb={4}
            textAlign="center"
            size="md"
            bg="purple"
            borderRadius="3xl"
            color="white"
            py={2}
          >
            {entities[0].brand} {entities[0].model}
          </Heading>
          <ReviewsCard
            productData={[entities[0]]}
            title={"Total Reviews"}
            subtitle={"Total unfiltered reviews"}
            barColor="purple"
            tagBg="purple"
            starColor="purple"
          />
        </Box>
        <Box>
          <Heading
            mb={4}
            textAlign="center"
            size="md"
            bg="teal"
            borderRadius="3xl"
            color="white"
            py={2}
          >
            {entities[1].brand} {entities[1].model}
          </Heading>
          <ReviewsCard
            productData={[entities[1]]}
            title={"Total Reviews"}
            subtitle={"Total unfiltered reviews"}
            barColor="teal"
            tagBg="teal"
            starColor="teal"
          />
        </Box>
        <Flex>
          <ChartTotal entities={entities} />
        </Flex>
      </Flex>
      <Flex>
        <Box w="50%">
          <Chart entities={entities} />
        </Box>
        <Box w="50%">
          <AspectsChart entities={entities} />
        </Box>
      </Flex>
    </Box>
  );
};
