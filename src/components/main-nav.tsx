import { Flex, Stack } from "@chakra-ui/react";
import NavLink from "./sidebar/nav-link";

const MainNav: React.FC = (): JSX.Element => (
  <Stack gap="6">
    <NavLink to="/cats">Cats</NavLink>
    <NavLink to="/breeds">Breeds</NavLink>
    <NavLink to="/favourites">Favourites</NavLink>
  </Stack>
);

export default MainNav;
