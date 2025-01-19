import { Button, Center, Spinner } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useCatsQuery } from "../cats/queries";
import CatsFeed from "./cats-feed";

export default function CatsFeedPage() {
  const { catId } = useParams<{ catId: string }>();
  const {
    data: cats = {
      pages: [],
    },
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useCatsQuery();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView, fetchNextPage]);

  return (
    <>
      <CatsFeed {...{ cats, catId }} />
      {cats.pages.length > 0 ? (
        <Center p="12">
          <Button
            type="button"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            colorPalette="blue"
            ref={ref}
          >
            {isFetchingNextPage || isFetching ? (
              <Spinner />
            ) : hasNextPage ? (
              "More cats please!"
            ) : (
              "Nothing more to load"
            )}
          </Button>
        </Center>
      ) : null}
    </>
  );
}
