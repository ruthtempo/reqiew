import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";

const ratingsProStar = [
  { stars: 1, reviews: 281 },
  { stars: 2, reviews: 320 },
  { stars: 3, reviews: 729 },
  { stars: 4, reviews: 636 },
  { stars: 5, reviews: 4135 },
];

const totalRev = 5480;

export const ReviewsCard = () => {
  return (
    <Card variant="filled">
      <CardHeader>
        <Heading size="md">Reliable Reviews</Heading>
        <Text pt="2" fontSize="sm">
          Anti-spam filtered reviews
        </Text>
      </CardHeader>
      <CardBody>
        {ratingsProStar.map((rating) => (
          <Progress value={rating.reviews} max={5480} m={4} />
        ))}
      </CardBody>
    </Card>
  );
};
