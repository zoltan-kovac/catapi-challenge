"use client";

import { Flex, Icon, type RecipeVariantProps, chakra } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { NavLink as BaseNavLink, type LinkProps } from "react-router-dom";

import { defineRecipe } from "@chakra-ui/react";

export const mainNavLinkRecipe = defineRecipe({
  base: {
    display: "flex",
  },
  variants: {
    active: {},
    visual: {
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
});

type MainNavLinkVariantProps = RecipeVariantProps<typeof mainNavLinkRecipe>;

export interface MainNavLinkProps
  extends React.PropsWithChildren<MainNavLinkVariantProps> {
  icon?: IconType;
  to: string;
}

export const MainNavLink = ({
  children,
  icon,
  to,
  ...props
}: MainNavLinkProps): JSX.Element => {
  return (
    <BaseNavLink to={to}>
      {({ isActive }) => {
        return (
          <chakra.div
            display="flex"
            fontWeight={isActive ? "bold" : "normal"}
            {...props}
          >
            {children}
          </chakra.div>
        );
      }}
    </BaseNavLink>
  );
};

interface NavLinkProps extends LinkProps {
  icon?: IconType;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  icon,
}): JSX.Element => {
  return (
    <BaseNavLink to={to}>
      {({ isActive }) => {
        return (
          <Flex
            align="center"
            p="4"
            borderRadius="lg"
            cursor="pointer"
            _hover={{
              bg: "blue.200",
              borderColor: "blue.400",
            }}
            {...(isActive
              ? {
                  bg: "blue.200",
                  borderColor: "blue.400",
                }
              : {})}
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
        );
      }}
    </BaseNavLink>
  );
};
