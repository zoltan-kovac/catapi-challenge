import { Box, Button, Center, Spinner } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CatList from "./cat-list";
import { useCatsQuery } from "./queries";

const CatsView: React.FC = (): JSX.Element => {
  const { catId } = useParams<{ catId: string }>();
  const {
    data: cats = {
      pages: [],
    },
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
      <Center p="12">
        <Button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          colorPalette="blue"
          ref={ref}
        >
          {isFetchingNextPage ? (
            <Spinner />
          ) : hasNextPage ? (
            "More cats please!"
          ) : (
            "Nothing more to load"
          )}
        </Button>
      </Center>
    </>
  );
};

export default CatsView;
