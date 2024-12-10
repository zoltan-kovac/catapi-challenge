import { ButtonGroup } from "@chakra-ui/react";
import * as React from "react";
import NavLink from "./nav-link";

const MainNav: React.FC = (): JSX.Element => {
  return React.useMemo(
    () => (
      <ButtonGroup spacing="6">
        <NavLink to="/cats">Cats</NavLink>
        <NavLink to="/breeds">Breeds</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </ButtonGroup>
    ),
    [],
  );
};

export default MainNav;
