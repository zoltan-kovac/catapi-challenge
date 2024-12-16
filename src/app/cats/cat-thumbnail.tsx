import { AspectRatio, Card, Image } from "@chakra-ui/react";
import type { Image as ImageType } from "@thatapicompany/thecatapi/dist/types";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import ToggleFavouriteBtn from "../../components/toggle-favourite-button";

const CatThumbnail: React.FC<Omit<ImageType, "width" | "height">> = ({
  id,
  url,
}): JSX.Element => {
  return useMemo(
    () => (
      <Card.Root>
        <Card.Body>
          <Link to={`/cats/${id}`} relative="path">
            <AspectRatio ratio={4 / 3} overflow="hidden">
              <Image src={url} alt={id} cursor="pointer" loading="lazy" />
            </AspectRatio>
          </Link>
        </Card.Body>
        <Card.Footer
          data-state="open"
          _open={{
            animationName: "fade-in, scale-in",
            animationDuration: "300ms",
          }}
          _closed={{
            animationName: "fade-out, scale-out",
            animationDuration: "120ms",
          }}
        >
          <ToggleFavouriteBtn imageId={id} alignSelf="flex-end" />
        </Card.Footer>
      </Card.Root>
    ),
    [id, url],
  );
};

export default CatThumbnail;
