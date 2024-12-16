import CatDetailPage from "@/app/cats/[id]";
import { createBrowserRouter, redirect } from "react-router-dom";
import BreedDetail from "../components/breed-detail";
import Layout from "../components/layout";
import BreedsView from "./breeds";
import CatsFeedPage from "./cats";
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
    element: <CatsFeedPage />,
    children: [
      {
        path: ":catId",
        element: <CatDetailPage />,
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
