import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import mainNavSlotRecipe from "./components/navigation/main-nav.recipe";

const customConfig = defineConfig({
  disableLayers: true,
  conditions: {
    off: "&:is([data-state=off])",
    on: "&:is([data-state=on])",
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        red: {
          value: "#EE0F0F",
        },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },

    slotRecipes: {
      mainNav: mainNavSlotRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
