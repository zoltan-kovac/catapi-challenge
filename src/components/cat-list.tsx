import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import type { CatImage } from "../app/cats/types";
import type { FavouriteCat } from "../app/favourites/types";
import CatThumbnail from "./cat-thumbnail";

type CatListProps = {
  cats: {
    pages?: Array<CatImage[] | FavouriteCat[]>;
  };
};

const CatList: React.FC<CatListProps> = ({ cats }): JSX.Element => {
  return (
    <SimpleGrid columns={1} gap={5}>
      {cats?.pages?.map((page: CatImage[] | FavouriteCat[]) => {
        return page?.map(({ url, id }, index) => {
          return (
            <Box key={`${index}-${id}`}>
              {/* <RouterLink
                to={`/cats/${id}`}
                relative="path"
                // onClick={() => setOpen(true)}
              > */}
              <CatThumbnail {...{ url, id }} />
              {/* </RouterLink> */}
            </Box>
          );
        });
      })}
    </SimpleGrid>
  );
};

export default CatList;
