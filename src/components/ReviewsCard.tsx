import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Progress,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { StarRating } from "./StarRating";

const ratingsProStar = [
  { stars: 5, reviews: 4135 },
  { stars: 4, reviews: 636 },
  { stars: 3, reviews: 729 },
  { stars: 2, reviews: 320 },
  { stars: 1, reviews: 281 },
];

const totalRev = 5480;

export const ReviewsCard = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Reliable Reviews</Heading>
        <Text pt="2" fontSize="sm">
          Anti-spam filtered reviews
        </Text>
      </CardHeader>
      <CardBody>
        <Flex>
          <Tag fontSize="xs">4.5/5</Tag>
          <StarRating />
          <Text fontSize="xs">{totalRev} Reviews</Text>
        </Flex>

        {ratingsProStar.map((rating) => (
          <Progress value={rating.reviews} max={5480} m={4} />
        ))}
      </CardBody>
    </Card>
  );
};
