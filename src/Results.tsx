import {
  ArrowDownIcon,
  ArrowUpIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";

import {
  Card,
  Icon,
  Progress,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Aspect {
  aspect: string;
  score: number;
  benchmark: number;
}

const sentimentRating: Aspect[] = [
  { aspect: "Quality", score: 90, benchmark: 85 },
  { aspect: "Design", score: 93, benchmark: 87 },
  { aspect: "Cleaning", score: 61, benchmark: 55 },
  { aspect: "Safety", score: 72, benchmark: 68 },
  { aspect: "Service", score: 64, benchmark: 70 },
  { aspect: "Food Taste", score: 87, benchmark: 90 },
];

const assignProgressColor = (score: number) => {
  if (score < 20) {
    return "red";
  } else if (score < 50) {
    return "yellow";
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

type Sorted = "ascending" | "descending";

export const Results = () => {
  const [sortedBy, setSortedBy] = useState<Sorted>("descending");

  const handleSortScores = () => {
    if (sortedBy === "descending") {
      sentimentRating.sort((a, b) => a.score - b.score); // lower to higher
      setSortedBy("ascending");
    } else {
      sentimentRating.sort((a, b) => b.score - a.score); //higher to lower
      setSortedBy("descending");
    }
  };

  return (
    <Card>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sentiment</Th>
              <Th cursor={"pointer"}>
                Score
                <Icon
                  as={
                    sortedBy === "descending"
                      ? TriangleDownIcon
                      : TriangleUpIcon
                  }
                  onClick={handleSortScores}
                />
              </Th>
              <Th>Benchmark</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sentimentRating.map((element) => (
              <Tr>
                <Td>{element.aspect}</Td>
                <Td>
                  <Progress
                    colorScheme={assignProgressColor(element.score)}
                    size="sm"
                    value={element.score}
                  />
                  {element.score} %
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={2}>
                    <Tag colorScheme={assignProgressColor(element.benchmark)}>
                      <Icon
                        as={
                          element.benchmark < element.score
                            ? ArrowUpIcon
                            : ArrowDownIcon
                        }
                      />
                      {calculateScoreDiff(element.score, element.benchmark)} %
                    </Tag>
                    <Text fontSize="xs">{element.benchmark} %</Text>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
