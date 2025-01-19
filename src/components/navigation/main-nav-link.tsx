"use client";

import { Icon, type RecipeVariantProps, chakra } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { NavLink as BaseNavLink } from "react-router-dom";
import type { mainNavLinkRecipe } from "./main-nav.recipe";

type MainNavLinkVariantProps = RecipeVariantProps<typeof mainNavLinkRecipe>;

export interface MainNavLinkProps
  extends React.PropsWithChildren<MainNavLinkVariantProps> {
  icon?: IconType;
  activeIcon?: IconType;
  to: string;
}

export default function MainNavLink({
  children,
  icon,
  activeIcon,
  to,
  ...props
}: MainNavLinkProps) {
  return (
    <chakra.div
      borderBottom="1px dashed"
      borderColor="gray.300"
      _first={{
        borderTop: "1px dashed",
        borderColor: "gray.300",
      }}
    >
      <BaseNavLink to={to}>
        {({ isActive }) => {
          return (
            <chakra.div
              display="flex"
              px="4"
              py="6"
              alignItems="center"
              fontSize="md"
              fontWeight={isActive ? "bold" : "normal"}
              _hover={{
                textDecoration: "underline",
              }}
              {...props}
            >
              {icon && (
                <Icon
                  mr="4"
                  fontSize="2xl"
                  _groupHover={{
                    color: "white",
                  }}
                  as={isActive ? activeIcon : icon}
                />
              )}
              {children}
            </chakra.div>
          );
        }}
      </BaseNavLink>
    </chakra.div>
  );
}
