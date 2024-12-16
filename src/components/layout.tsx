import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import MainNav from "./main-nav";

const Layout: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <Box as="main" height="100vh" bgColor="blue.100/50">
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
              <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <Outlet />
                {/* {children && children} */}
              </ErrorBoundary>
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
    </>
  );
};

export default Layout;
