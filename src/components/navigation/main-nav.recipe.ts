import { defineSlotRecipe } from "@chakra-ui/react";

const mainNavSlotRecipe = defineSlotRecipe({
  slots: ["root", "text", "icon"],
  base: {
    root: {
      bg: "blue.500",
      color: "white",
      px: 4,
      py: 2,
    },
    text: {
      borderRadius: "full",
      px: 2,
      py: 1,
    },
  },
});

export default mainNavSlotRecipe;
