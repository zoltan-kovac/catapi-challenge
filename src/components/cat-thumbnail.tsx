import { Card, CardBody, Center, Image, Spinner } from "@chakra-ui/react";
import * as React from "react";
import type { CatImage as CatImageType } from "../app/cats/types";

const CaatThumbnail: React.FC<CatImageType> = ({ id, url }): JSX.Element => {
  return React.useMemo(
    () => (
      <Card>
        <CardBody
          minH={{
            base: "xl",
            sm: "xs",
          }}
        >
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
            fallback={
              <Center
                minH={{
                  base: "xl",
                  sm: "xs",
                }}
              >
                <Spinner />
              </Center>
            }
          />
        </CardBody>
      </Card>
    ),
    [id, url],
  );
};

export default CaatThumbnail;
