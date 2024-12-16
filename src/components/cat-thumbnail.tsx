import { AspectRatio, Card, Image } from "@chakra-ui/react";
import { useMemo } from "react";
import type { CatImage as CatImageType } from "../app/cats/types";

const CatThumbnail: React.FC<CatImageType> = ({ id, url }): JSX.Element => {
  return useMemo(
    () => (
      <Card.Root>
        <Card.Body
          minH={{
            base: "xl",
            sm: "xs",
          }}
        >
          {/* <AspectRatio ratio={4 / 3} rounded="lg" overflow="hidden"> */}
          <Image
            src={url}
            alt={id}
            boxSize={{ base: "100%", lg: "lg" }}
            maxH={{
              base: "xl",
              sm: "xs",
            }}
            minH={{
              base: "xl",
              sm: "xs",
            }}
            objectFit="cover"
            cursor="pointer"
            // fallback={
            //   <Center
            //     minH={{
            //       base: "xl",
            //       sm: "xs",
            //     }}
            //   >
            //     <Spinner />
            //   </Center>
            // }
          />
          {/* </AspectRatio> */}
        </Card.Body>
      </Card.Root>
    ),
    [id, url],
  );
};

export default CatThumbnail;
