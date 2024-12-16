import { Icon, Stack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaAtlas, FaCat, FaHeart } from "react-icons/fa";
import { Button } from "./main-nav-link";

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
        <Button key={name} to={url} icon={NavIcon} visual="outline">
          {name}
        </Button>
        // <NavLink key={name} to={url}>
        //   <Icon mr={2}>
        //     <NavIcon />
        //   </Icon>
        //   {name}
        // </NavLink>
      );
    })}
  </Stack>
);

export default MainNav;
