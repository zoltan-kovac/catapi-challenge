import { Button, Center, Spinner } from "@chakra-ui/react";
import type * as React from "react";
import { useParams } from "react-router-dom";
import CatList from "../../components/cat-list";
import Layout from "../../components/layout";
import { useCatsQuery } from "./api";

const CatsView: React.FC = (): JSX.Element => {
  const { catId } = useParams<{ catId: string }>();
  const {
    data: cats = {
      pages: [],
    },
    isLoading,
    isFetching,
    fetchNextPage,
  } = useCatsQuery();

  return (
    <Layout>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <CatList {...{ cats, catId }} />
      )}
      <Center>
        <Button
          my={5}
          size="lg"
          onClick={() => fetchNextPage()}
          isLoading={isFetching}
          disabled={isFetching}
        >
          More cats please!
        </Button>
      </Center>
    </Layout>
  );
};

export default CatsView;
