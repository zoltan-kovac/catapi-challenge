import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import BreedsView from "./app/breeds";
import CatsFeedPage from "./app/cats";
import CatDetailPage from "./app/cats/[id]";
import FavouritesView from "./app/favourites";
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
            <Route index element={<CatsFeedPage />} />
            <Route path=":catId" element={<CatDetailPage />} />
          </Route>
          <Route path="breeds" element={<Layout />}>
            <Route index element={<BreedsView />} />
          </Route>
          <Route path="favourites" element={<Layout />}>
            <Route index element={<FavouritesView />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </Providers>
  </React.StrictMode>,
);
