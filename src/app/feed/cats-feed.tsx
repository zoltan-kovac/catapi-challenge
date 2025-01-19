import { Box, SimpleGrid } from "@chakra-ui/react";
import type { Image } from "@thatapicompany/thecatapi/dist/types";
import CatThumbnail from "../cats/cat-thumbnail";

type CatsFeedProps = {
  cats: {
    pages?: Array<Image[]>;
  };
};

export default function CatsFeed({ cats }: CatsFeedProps) {
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
