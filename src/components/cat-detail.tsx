import { AspectRatio, Box, Button, Spinner } from "@chakra-ui/react";
import { find } from "lodash";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CatThumbnail from "../app/cats/cat-thumbnail";
import { useCatQuery } from "../app/cats/queries";
import DeleteFavCatBtn from "./delete-favourite-cat-button";
import AddFavCatBtn from "./toggle-favourite-button";

type CatDetailProps = {
  open: boolean;
  onOpenChange: () => void;
};

const CatDetail: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { catId } = useParams<{ catId: string }>();
  const { data, isFetching } = useCatQuery(catId);
  // const { data: favCats } = useGetFavsQuery();

  const { id, url, breeds } = data || {};
  // const favId = find(favCats, { image_id: id })?.id;

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

export default CatDetail;
