import * as React from "react";
import CatList from "../../components/cat-list";
import Layout from "../../components/layout";
import { useGetFavsQuery } from "./api";

const FavouritesView: React.FC = (): JSX.Element => {
  const { data: favourites = [] } = useGetFavsQuery();

  const cats = favourites?.map((cat) => ({
    ...cat,
    url: cat?.image?.url,
    id: cat?.image_id,
  }));

  return React.useMemo(
    () => (
      <Layout>
        <CatList cats={{ pages: [[...cats]] }} />
      </Layout>
    ),
    [cats],
  );
};

export default FavouritesView;
