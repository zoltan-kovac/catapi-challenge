import { Box, Flex, Icon } from "@chakra-ui/react";
import type { BoxProps, ChakraComponent } from "@chakra-ui/react";
import { forwardRef } from "react";
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
  return (
    <BaseNavLink to={to}>
      <Flex
        // as={BaseNavLink}
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
    </BaseNavLink>
  );
};

export default NavLink;
