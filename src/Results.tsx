import {
  Card,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface Aspect {
  aspect: string;
  score: number;
}

const sentimentRating: Aspect[] = [
  { aspect: "Quality", score: 90 },
  { aspect: "Design", score: 93 },
  { aspect: "Cleaning", score: 61 },
  { aspect: "Safety", score: 72 },
  { aspect: "Service", score: 64 },
  { aspect: "Food Taste", score: 87 },
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

export const Results = () => {
  return (
    <Card>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sentiment</Th>
              <Th>Score</Th>
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
                <Td> up or down + % </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
