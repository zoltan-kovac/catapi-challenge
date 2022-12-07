import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { CatImage } from "../routes/cats/types";
import CatThumbnail from "./cat-thumbnail";
import CatDetail from "./cat-detail";

type CatListProps = {
  cats: {
    pages: Array<CatImage[]>;
  };
  catId?: string;
};

const CatList: React.FC<CatListProps> = ({ cats, catId }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: catId != null,
  });

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        spacing={5}
      >
        {cats?.pages?.map((page: CatImage[]) => {
          return page?.map(({ url, id }, index) => {
            return (
              <Box key={`${index}-${id}`}>
                <Link to={id} as={RouterLink} relative="path" onClick={onOpen}>
                  <CatThumbnail {...{ url, id }} />
                </Link>
              </Box>
            );
          });
        })}
      </SimpleGrid>

      <CatDetail {...{ onClose, isOpen }} />
    </>
  );
};

export default CatList;
