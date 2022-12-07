import * as React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import { useBreedsQuery } from "./api";

type BreedsViewProps = {};

const BreedsView: React.FC<BreedsViewProps> = (): JSX.Element => {
  const { catId } = useParams();
  const {
    data: breeds = {
      pages: [],
    },
    fetchNextPage,
  } = useBreedsQuery();

  return React.useMemo(
    () => (
      <Layout>
        <Box>
          <Button onClick={() => fetchNextPage()}>More breeds please!</Button>
        </Box>
      </Layout>
    ),
    [breeds]
  );
};

export default BreedsView;
