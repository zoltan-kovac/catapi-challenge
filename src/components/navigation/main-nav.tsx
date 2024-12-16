import { Stack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaAtlas, FaCat, FaHeart } from "react-icons/fa";
import { MainNavLink } from "./main-nav-link";

interface MainMenuItemProps {
  name: string;
  url: string;
  icon: IconType;
}

const mainNavItems: Array<MainMenuItemProps> = [
  { name: "Home", url: "/cats", icon: FaCat },
  { name: "Breeds", url: "/breeds", icon: FaAtlas },
  { name: "Favourites", url: "/favourites", icon: FaHeart },
];

const MainNav: React.FC = (): JSX.Element => (
  <Stack gap="6">
    {mainNavItems.map(({ name, url, icon: NavIcon }) => {
      return (
        <MainNavLink key={name} to={url} icon={NavIcon} visual="outline">
          {name}
        </MainNavLink>
      );
    })}
  </Stack>
);

export default MainNav;
