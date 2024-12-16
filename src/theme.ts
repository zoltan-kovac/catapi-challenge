import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  disableLayers: true,
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
  },
});

export const system = createSystem(defaultConfig, customConfig);
