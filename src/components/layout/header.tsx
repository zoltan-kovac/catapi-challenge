import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container maxW="4xl" height="4xs" borderColor="white" py="12">
      <SimpleGrid gap="12" columns={{ base: 1, md: 2 }} alignItems="center">
        <Box>
          <Text color="blue.700" fontSize="5xl" fontWeight="900">
            The cat feed
          </Text>
        </Box>
        <Box textAlign="right">
          <Text opacity=".7">60k+ Images. Breeds. Facts. </Text>
          <Text opacity=".7">
            Powered on <Link to="https://thecatapi.com/">thecatapi.com</Link>
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
