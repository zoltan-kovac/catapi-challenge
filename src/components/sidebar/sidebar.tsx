import {
  Box,
  // CloseButton,
  // Drawer,
  // DrawerContent,
  Flex,
  Text,
  // useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiHome, FiStar, FiTrendingUp } from "react-icons/fi";

import type { BoxProps } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { MobileNav } from "../mobile-nav";
import { NavLink } from "../navigation/main-nav-link";

interface LinkItemProps {
  name: string;
  url?: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", url: "/cats", icon: FiHome },
  { name: "Breeds", url: "/breeds", icon: FiTrendingUp },
  { name: "Favourites", url: "/favourites", icon: FiStar },
];

export function SidebarContent({
  onClose,
  ...rest
}: BoxProps & { onClose: () => void }) {
  return (
    <Box
      transition="3s ease"
      // bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      // borderRightColor={useColorModeValue("gray.200", "gray.700")}
      width={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text>Fav cats app</Text>
        {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
      </Flex>
      {LinkItems.map((link) =>
        link.url ? (
          <NavLink key={link.name} to={link.url}>
            {link.name}
          </NavLink>
        ) : null,
      )}
    </Box>
  );
}

export function Sidebar() {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minH="100vh"
      // bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      {/* <Drawer
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
      </Drawer> */}
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
}
