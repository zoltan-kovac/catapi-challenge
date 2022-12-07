import { Box, Button } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router-dom";
import CatList from "../../components/cat-list";
import Layout from "../../components/layout";
import { useCatsQuery } from "./api";

type CatsViewProps = {};

const CatsView: React.FC<CatsViewProps> = (): JSX.Element => {
  const { catId } = useParams<{ catId: string }>();
  const {
    data: cats = {
      pages: [],
    },
    fetchNextPage,
  } = useCatsQuery();

  return React.useMemo(
    () => (
      <Layout>
        <CatList {...{ cats, catId }} />
        <Box>
          <Button onClick={() => fetchNextPage()}>More cats please!</Button>
        </Box>
      </Layout>
    ),
    [cats, catId]
  );
};

export default CatsView;
