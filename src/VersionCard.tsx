import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { IoDiamond } from "react-icons/io5";

export const VersionCard = () => {
  return (
    <Card variant="filled" bg={"blue.100"} borderRadius="2xl">
      <CardHeader>
        <Heading size="md">Pro version ON</Heading>
        <Text pt="2" fontSize="sm">
          You have access to all functions
        </Text>
      </CardHeader>
      <CardBody>
        <Heading size="xs">
          <Flex alignItems={"center"} gap={3}>
            Edit Subscription <Icon as={IoDiamond} boxSize={25} />
          </Flex>
        </Heading>
      </CardBody>
    </Card>
  );
};
