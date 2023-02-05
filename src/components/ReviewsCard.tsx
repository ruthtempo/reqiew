import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MdStarRate } from "react-icons/md";
import { Entity } from "../_DATA";
import { RatingBar } from "./RatingBar";

export const ReviewsCard = (p: { productData: Entity[] }) => {
  const totalRatingProStar = p.productData
    .map((data) => data.rating)
    .reduce(
      (acc, curr) => {
        return [
          acc[0] + curr[0],
          acc[1] + curr[1],
          acc[2] + curr[2],
          acc[3] + curr[3],
          acc[4] + curr[4],
        ];
      },
      [0, 0, 0, 0, 0]
    );

  const totalReviewSum = totalRatingProStar.reduce((acc, curr) => acc + curr);

  const starAverage = totalRatingProStar.reduce(
    (acc, curr, i) => acc + (5 - i) * (curr / totalReviewSum),
    0
  );
  console.log(starAverage);

  return (
    <Card bg={"gray.100"} variant="filled" borderRadius="2xl">
      <CardHeader>
        <Heading size="md">Reliable Reviews</Heading>
        <Text pt="2">Anti-spam filtered reviews</Text>
      </CardHeader>
      <CardBody>
        <Flex justifyContent="space-around" gap={4}>
          <Tag variant="outline" borderRadius="full" alignItems="center">
            <Icon as={MdStarRate} boxSize={15} color="teal" mr={2} />
            {starAverage ? starAverage.toFixed(1) : 0}/5
          </Tag>
          <Tag variant="solid" borderRadius="full" bg="teal">
            <Text>Total Reviews {totalReviewSum}</Text>
          </Tag>
        </Flex>
        {totalRatingProStar.map((rating, i) => (
          <RatingBar
            star={5 - i}
            reviews={rating}
            value={rating}
            max={totalReviewSum}
            key={i}
          />
        ))}
      </CardBody>
    </Card>
  );
};
