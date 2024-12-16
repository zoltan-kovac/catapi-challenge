import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import BreedsView from "./app/breeds";
import CatsView from "./app/cats";
import FavouritesView from "./app/favourites";
import CatDetail from "./components/cat-detail";
import Layout from "./components/layout";
import { Providers } from "./lib/providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            loader={() => redirect("cats")}
            element={<Layout />}
          />
          <Route
            path="cats"
            element={<Layout />}
            errorElement={
              <ErrorBoundary fallback={<h1>Something went wrong</h1>} />
            }
          >
            <Route index element={<CatsView />} />
            <Route path=":catId" element={<CatDetail />} />
          </Route>
          <Route path="breeds" element={<Layout />}>
            <Route index element={<BreedsView />} />
          </Route>
          <Route path="favourites" element={<Layout />}>
            <Route index element={<FavouritesView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
);
