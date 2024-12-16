import { Toaster } from "@/lib/toaster";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainNav from "./navigation/main-nav";

const Layout: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Box
      as="main"
      height="100%"
      minH="100vh"
      bgColor="blue.100/50"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Container
        maxW="4xl"
        height="36"
        borderBottom="1px solid"
        borderColor="gray.200"
        mb="12"
        p="12"
      >
        <Text textAlign="right" color="blue.500">
          Header
        </Text>
      </Container>
      <Container maxW="4xl">
        <Grid templateColumns="repeat(4, 1fr)" gap="12">
          <GridItem
            position="sticky"
            top="1em"
            maxH="100vh"
            colSpan={{
              base: 4,
              md: 1,
            }}
          >
            <MainNav />
          </GridItem>
          <GridItem
            colSpan={{
              base: 4,
              md: 3,
            }}
          >
            <Outlet />
          </GridItem>
          {/* <GridItem
            colSpan={{
              base: 4,
              md: 1,
            }}
          /> */}
        </Grid>
      </Container>
      <Container
        maxW="4xl"
        height="36"
        borderTop="1px solid"
        borderColor="gray.200"
        mt="12"
        p="12"
      >
        <Text textAlign="right" color="blue.500">
          2024
        </Text>
      </Container>
      <Toaster />
    </Box>
  );
};

export default Layout;
