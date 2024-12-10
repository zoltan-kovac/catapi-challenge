import { Flex, Icon } from "@chakra-ui/react";
import * as React from "react";
import type { IconType } from "react-icons";
import { NavLink as BaseNavLink } from "react-router-dom";

type NavLinkProps = React.PropsWithChildren<{
  to: string;
  icon?: IconType;
}>;

const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  icon,
}): JSX.Element => {
  return React.useMemo(
    () => (
      <Flex
        as={BaseNavLink}
        to={to}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        // TODO: Replace html tag with semantic <fieldset> element
        // biome-ignore lint/a11y/useSemanticElements: Fieldset component not in this version on Chakra
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    ),
    [children, to, icon],
  );
};

export default NavLink;
