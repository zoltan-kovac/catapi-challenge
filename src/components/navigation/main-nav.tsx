import { Stack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  PiBooks,
  PiBooksBold,
  PiCat,
  PiCatBold,
  PiHeart,
  PiHeartBold,
} from "react-icons/pi";
import MainNavLink from "./main-nav-link";

interface MainMenuItemProps {
  name: string;
  url: string;
  icon: IconType;
  activeIcon?: IconType;
}

const mainNavItems: Array<MainMenuItemProps> = [
  { name: "Feed", url: "/feed", icon: PiCat, activeIcon: PiCatBold },
  { name: "Breeds", url: "/breeds", icon: PiBooks, activeIcon: PiBooksBold },
  {
    name: "Favourites",
    url: "/favourites",
    icon: PiHeart,
    activeIcon: PiHeartBold,
  },
];

export default function MainNav() {
  return (
    <Stack gap="0" borderLeft="1px dashed" borderColor="gray.300">
      {mainNavItems.map(
        ({ name, url, icon: NavIcon, activeIcon: ActiveNavIcon }) => {
          return (
            <MainNavLink
              key={name}
              to={url}
              icon={NavIcon}
              activeIcon={ActiveNavIcon}
              visual="outline"
            >
              {name}
            </MainNavLink>
          );
        },
      )}
    </Stack>
  );
}
