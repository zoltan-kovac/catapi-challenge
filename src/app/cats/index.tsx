import { Button, Center, Spinner } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CatList from "./cat-list";
import { useCatsQuery } from "./queries";

const CatsFeedPage: React.FC = (): JSX.Element => {
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
      <CatList {...{ cats, catId }} />
      {cats != null ? (
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
};

export default CatsFeedPage;
