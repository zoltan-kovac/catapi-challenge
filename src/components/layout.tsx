import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainNav from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { SidebarContent } from "./sidebar/sidebar";

const Layout: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
        {children && children}
      </Box>
    </Box>
    // <Container
    //   py={10}
    //   minW={{
    //     lg: "container.lg",
    //   }}
    // >
    //   <Flex justifyContent="space-between" alignItems="flex-end" mb={5}>
    //     {/* <Heading size="xl">Cat App</Heading> */}
    //     <MainNav />
    //   </Flex>
    //   <Outlet />
    //   {children && children}
    // </Container>
  );
};

export default Layout;
