import CatDetail from "@/components/cat-detail";
import { createBrowserRouter, redirect } from "react-router-dom";
import BreedDetail from "../components/breed-detail";
import Layout from "../components/layout";
import BreedsView from "./breeds";
import CatsView from "./cats";
import FavouritesView from "./favourites";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    loader: async () => redirect("cats"),
    element: <Layout>Home</Layout>,
    errorElement: <Layout>404 page</Layout>,
  },
  {
    path: "cats",
    element: <CatsView />,
    children: [
      {
        path: ":catId",
        element: <CatDetail />,
      },
    ],
  },
  {
    path: "favourites",
    element: <FavouritesView />,
  },
  {
    path: "breeds",
    element: <BreedsView />,
    children: [
      {
        path: ":breedId",
        element: <BreedDetail />,
      },
    ],
  },
]);
