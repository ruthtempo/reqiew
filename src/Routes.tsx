import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { MenuNav } from "./components/Menu";
import { Benchmark } from "./components/Benchmark";

export const NavigationRoutes = () => {
  return (
    <Container h="100vh" maxW="5xl">
      <MenuNav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/benchmark" element={<Benchmark />} />
      </Routes>
    </Container>
  );
};
