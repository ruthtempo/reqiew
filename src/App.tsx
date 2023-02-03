import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Filters } from "./components/FilterOptions";
import { MenuNav } from "./components/Menu";
import { Results } from "./components/Results";
import { ReviewsCard } from "./components/ReviewsCard";
import { VersionCard } from "./VersionCard";

function App() {
  return (
    <Container h="100vh" maxW="5xl">
      <MenuNav />
      <Filters />
      <Heading as="h2" size="lg" textAlign="center" py={3}>
        Aspect-based Sentiment:BBQ
      </Heading>
      <Flex gap={3}>
        <Box display="flex" flexDirection="column" gap={4}>
          <ReviewsCard />
          <VersionCard />
        </Box>
        <Results />
      </Flex>
    </Container>
  );
}

export default App;
