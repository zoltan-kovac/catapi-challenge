import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BreedsView from "./app/breeds";
import CatsFeedPage from "./app/feed";
import CatDetailPage from "./app/cats/[id]";
import FavouritesView from "./app/favourites";
import Layout from "./components/layout/layout";
import { Providers } from "./lib/providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="feed" replace />} />
          <Route
            path="feed"
            element={<Layout />}
            errorElement={
              <ErrorBoundary fallback={<h1>Something went wrong</h1>} />
            }
          >
            <Route index element={<CatsFeedPage />} />
          </Route>
          <Route
            path="cats"
            element={<Layout />}
            errorElement={
              <ErrorBoundary fallback={<h1>Something went wrong</h1>} />
            }
          >
            <Route index path=":catId" element={<CatDetailPage />} />
          </Route>
          <Route path="breeds" element={<Layout />}>
            <Route index element={<BreedsView />} />
          </Route>
          <Route path="favourites" element={<Layout />}>
            <Route index element={<FavouritesView />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </Providers>
  </React.StrictMode>,
);
