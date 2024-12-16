import { Box, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import CatThumbnail from "../cat-thumbnail";
import { useCatQuery } from "../queries";

const CatDetailPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { catId } = useParams() as { catId: string };
  const { data, isFetching } = useCatQuery(catId);
  // const { data: favCats } = useGetFavsQuery();

  const { id, url, breeds } = data || {};

  return (
    <Box>
      {breeds ? breeds.map(({ name }) => name).join(", ") : "No breed data"}
      {isFetching ? (
        <Spinner />
      ) : (
        url && id && <CatThumbnail url={url} id={id} />
      )}
    </Box>
  );
};

export default CatDetailPage;
