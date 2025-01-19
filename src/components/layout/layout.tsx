import { Toaster } from "@/lib/toaster";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainNav from "../navigation/main-nav";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
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
      <Header />
      <Container maxW="4xl">
        <Grid templateColumns="repeat(4, 1fr)" gap="12">
          <GridItem
            position="sticky"
            top="1em"
            maxH="100vh"
            borderRight="1px dashed"
            borderColor="gray.300"
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
          >
          </GridItem> */}
        </Grid>
      </Container>
      <Footer />

      <Toaster />
    </Box>
  );
}
