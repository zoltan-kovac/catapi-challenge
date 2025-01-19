import { useMemo } from "react";
import CatList from "../feed/cats-feed";
import { useGetFavouritesQuery } from "./queries";

const FavouritesView: React.FC = (): JSX.Element => {
  const { data: favourites = [] } = useGetFavouritesQuery();

  const cats = favourites?.map((cat) => ({
    ...cat,
    url: cat?.image?.url,
    id: cat?.image_id,
  }));

  return useMemo(() => <CatList cats={{ pages: [[...cats]] }} />, [cats]);
};

export default FavouritesView;
