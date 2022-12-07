import { Button, Link } from "@chakra-ui/react";
import * as React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";

type NavLinkProps = React.PropsWithChildren<{
  to: string;
}>;

const NavLink: React.FC<NavLinkProps> = ({ children, to }): JSX.Element => {
  return (
    <Button variant="link" as={BaseNavLink} to={to}>
      {children}
    </Button>
  );
};

export default NavLink;
