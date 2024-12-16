import { Box, SimpleGrid } from "@chakra-ui/react";
import type { Image } from "@thatapicompany/thecatapi/dist/types";
import CatThumbnail from "./cat-thumbnail";

type CatListProps = {
  cats: {
    pages?: Array<Image[]>;
  };
};

export default function CatList({ cats }: CatListProps) {
  return (
    <SimpleGrid gap={12}>
      {cats?.pages?.map((page: Image[]) => {
        return page?.map(({ url, id, breeds }, index) => {
          return (
            <Box key={`${index}-${id}`}>
              <CatThumbnail {...{ url, id, breeds }} />
            </Box>
          );
        });
      })}
    </SimpleGrid>
  );
}
