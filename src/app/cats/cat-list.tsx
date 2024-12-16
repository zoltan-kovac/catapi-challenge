import { Box, SimpleGrid } from "@chakra-ui/react";
import type { Image } from "@thatapicompany/thecatapi/dist/types";
import CatThumbnail from "./cat-thumbnail";

type CatListProps = {
  cats: {
    pages?: Array<Image[]>;
  };
};

const CatList: React.FC<CatListProps> = ({ cats }): JSX.Element => {
  return (
    <SimpleGrid gap={12}>
      {cats?.pages?.map((page: Image[]) => {
        return page?.map(({ url, id }, index) => {
          return (
            <Box key={`${index}-${id}`}>
              <CatThumbnail {...{ url, id }} />
            </Box>
          );
        });
      })}
    </SimpleGrid>
  );
};

export default CatList;
