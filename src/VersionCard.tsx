import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export const VersionCard = () => {
  return (
    <Card variant="filled">
      <CardHeader>
        <Heading size="md">Pro version ON</Heading>
        <Text pt="2" fontSize="sm">
          You have access to all functions
        </Text>
      </CardHeader>
      <CardBody>
        <Heading size="xs"> Edit Subscription</Heading>
      </CardBody>
    </Card>
  );
};
