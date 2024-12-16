import CatDetail from "@/components/cat-detail";
import { Button, Center, Spinner } from "@chakra-ui/react";
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

  return <CatList {...{ cats, catId }} />;
};

export default CatsView;
