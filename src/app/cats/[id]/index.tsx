import { Box, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import CatThumbnail from "../cat-thumbnail";
import { useCatQuery } from "../queries";

export default function CatDetailPage() {
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
}
