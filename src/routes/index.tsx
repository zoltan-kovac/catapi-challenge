import { createBrowserRouter, redirect } from "react-router-dom";
import CatDetailModal from "../components/cat-detail";
import Layout from "../components/layout";
import BreedsView from "./breeds";
import CatsView from "./cats";

const rootLoader = async () => {
  return redirect("/cats");
};

export const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader, // Redirects to '/cats' feed
    errorElement: <Layout>404 page</Layout>,
  },
  {
    path: "/cats",
    element: <CatsView />,
    children: [
      {
        path: ":catId",
      },
    ],
  },
  {
    path: "favourites",
    element: <Layout>Favs</Layout>,
  },
  {
    path: "breeds",
    element: <BreedsView />,
  },
]);
