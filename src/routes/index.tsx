import { Container, Heading } from "@chakra-ui/react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Heading size="xl">Hello world!</Heading>
      </Container>
    ),
  },
]);
