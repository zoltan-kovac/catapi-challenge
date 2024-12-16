import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainNav from "./navigation/main-nav";

const Layout: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Box as="main" height="100%" bgColor="blue.100/50">
      <Container maxW="6xl">
        <Box py="12">Header</Box>

        <Grid templateColumns="repeat(4, 1fr)" gap="6">
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
              md: 2,
            }}
          >
            <Outlet />
          </GridItem>
          <GridItem
            colSpan={{
              base: 4,
              md: 1,
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout;
