import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import notfound from "../notfound.png";

import {
  Card,
  CardBody,
  Flex,
  Icon,
  Progress,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Image,
  Heading,
} from "@chakra-ui/react";
import { benchmarks, Entity } from "../_DATA";

const assignProgressColor = (score: number) => {
  if (score < 20) {
    return "red";
  } else if (score < 50) {
    return "orange";
  } else if (score < 70) {
    return "purple";
  } else {
    return "green";
  }
};

const calculateScoreDiff = (score: number, benchmark: number) => {
  const result = ((score - benchmark) / benchmark) * 100;
  return result.toFixed(1);
};

export const Results = (p: { productData: Entity[] }) => {
  const aspectsAverage = p.productData.reduce(
    (acc, curr) => ({
      quality: acc.quality + curr.aspects.quality / p.productData.length,
      safety: acc.safety + curr.aspects.safety / p.productData.length,
      design: acc.design + curr.aspects.design / p.productData.length,
      service: acc.service + curr.aspects.service / p.productData.length,
      cleaning: acc.cleaning + curr.aspects.cleaning / p.productData.length,
      foodTaste: acc.foodTaste + curr.aspects.foodTaste / p.productData.length,
    }),
    {
      quality: 0,
      safety: 0,
      design: 0,
      service: 0,
      cleaning: 0,
      foodTaste: 0,
    }
  );

  return !p.productData.length ? (
    <Card>
      <CardBody display="flex" flexDirection="column" textAlign="center">
        <Heading py="3">No Matches found</Heading>
        <Image src={notfound} alt="woman with empty folder" borderRadius="lg" />
      </CardBody>
    </Card>
  ) : (
    <Card flexGrow={1} borderRadius="2xl">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sentiment</Th>
              <Th w="30%">Score</Th>
              <Th>Benchmark</Th>
              <Th>Difference</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(
              Object.keys(aspectsAverage) as (keyof typeof aspectsAverage)[]
            ).map((aspect) => (
              <Tr key={aspect}>
                <Td>{aspect}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Text mr={3} fontSize="sm">
                      {aspectsAverage[aspect].toFixed()} %
                    </Text>
                    <Progress
                      flexGrow={1}
                      colorScheme={assignProgressColor(aspectsAverage[aspect])}
                      bg="gray.200"
                      size="sm"
                      value={aspectsAverage[aspect]}
                    />
                  </Flex>
                </Td>
                <Td>
                  <Text fontSize="sm">{benchmarks[aspect]} %</Text>
                </Td>
                <Td>
                  <Tag
                    colorScheme={
                      benchmarks[aspect] < aspectsAverage[aspect]
                        ? "green"
                        : "red"
                    }
                  >
                    <Icon
                      as={
                        benchmarks[aspect] < aspectsAverage[aspect]
                          ? ArrowUpIcon
                          : ArrowDownIcon
                      }
                    />
                    {calculateScoreDiff(
                      aspectsAverage[aspect],
                      benchmarks[aspect]
                    )}
                    %
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
