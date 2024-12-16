import { AspectRatio, Card, Image } from "@chakra-ui/react";
import type { Image as ImageType } from "@thatapicompany/thecatapi/dist/types";
import { useMemo } from "react";
import AddFavCatBtn from "./toggle-favourite-button";

const CatThumbnail: React.FC<ImageType> = ({ id, url }): JSX.Element => {
  return useMemo(
    () => (
      <Card.Root>
        <Card.Body>
          <AspectRatio ratio={4 / 3} overflow="hidden">
            <Image src={url} alt={id} cursor="pointer" />
          </AspectRatio>
        </Card.Body>
        <Card.Footer
          justifyContent="flex-end"
          position="absolute"
          bottom="0"
          width="100%"
        >
          <AddFavCatBtn id={id} disabled={false} />
        </Card.Footer>
      </Card.Root>
    ),
    [id, url],
  );
};

export default CatThumbnail;
