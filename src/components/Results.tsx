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

type Sorted = { sorted: string; reversed: boolean };

export const Results = () => {
  const [aspectRating, setAspectRating] = useState(
    sentimentRating.sort((a, b) => b.score - a.score)
  );

  const [sortedBy, setSortedBy] = useState<Sorted>({
    sorted: "score",
    reversed: false,
  });

  const sortByScore = () => {
    setSortedBy({ sorted: "score", reversed: !sortedBy.reversed });
    const aspectRatingCopy = [...aspectRating];

    aspectRatingCopy.sort((aspectA, aspectB) => {
      if (sortedBy.reversed) {
        return aspectA.score - aspectB.score;
      }
      return aspectB.score - aspectA.score;
    });

    setAspectRating(aspectRatingCopy);
  };

  return (
    <Card flexGrow={1} borderRadius="2xl">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sentiment</Th>
              <Th cursor={"pointer"}>
                Score
                <Icon
                  as={sortedBy.reversed ? TriangleDownIcon : TriangleUpIcon}
                  onClick={sortByScore}
                />
              </Th>
              <Th>Benchmark</Th>
            </Tr>
          </Thead>
          <Tbody>
            {aspectRating.map((element) => (
              <Tr key={element.aspect}>
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
                    <Text fontSize="xs">{element.benchmark} %</Text>
                    <Tag
                      colorScheme={
                        element.benchmark < element.score ? "green" : "red"
                      }
                    >
                      <Icon
                        as={
                          element.benchmark < element.score
                            ? ArrowUpIcon
                            : ArrowDownIcon
                        }
                      />
                      {calculateScoreDiff(element.score, element.benchmark)} %
                    </Tag>
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
