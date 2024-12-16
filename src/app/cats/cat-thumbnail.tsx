import { AspectRatio, Card, Image } from "@chakra-ui/react";
import type { Image as ImageType } from "@thatapicompany/thecatapi/dist/types";
import { Link } from "react-router-dom";
import ToggleFavouriteBtn from "../../components/toggle-favourite-button";

export default function CatThumbnail({
  id,
  url,
  breeds = [],
}: Omit<ImageType, "width" | "height">) {
  const { name, origin }: Record<string, string[]> = breeds.reduce(
    (acc, breed) => {
      acc.name = [...acc.name, breed.name];
      acc.origin = [...acc.origin, breed.origin];
      return acc;
    },
    { name: [], origin: [] },
  );

  return (
    <Card.Root>
      <Card.Body>
        <Link to={`/cats/${id}`} relative="path">
          <AspectRatio ratio={4 / 3} overflow="hidden">
            <Image src={url} alt={id} cursor="pointer" loading="lazy" />
          </AspectRatio>
        </Link>
      </Card.Body>
      <Card.Footer
        display="flex"
        justifyContent="space-between"
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
        {`${name.join(", ")} (${origin.join(", ")})`}
        {id ? <ToggleFavouriteBtn imageId={id} alignSelf="flex-end" /> : null}
      </Card.Footer>
    </Card.Root>
  );
}
