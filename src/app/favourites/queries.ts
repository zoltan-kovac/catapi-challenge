import { useQuery } from "@tanstack/react-query";
import type { Favourite } from "@thatapicompany/thecatapi/dist/types";
import { useCallback } from "react";
import { getFavourite, getFavourites } from "./api";

const getFavouritesQueryOptions = {
  queryKey: ["favourites"],
  queryFn: getFavourites,
};

export function useGetFavouritesQuery() {
  return useQuery(getFavouritesQueryOptions);
}

export function useFavouriteIds() {
  return useQuery({
    ...getFavouritesQueryOptions,
    select: useCallback(
      (data: Favourite[]) => data.map(({ imageId }) => imageId),
      [],
    ),
  });
}

export function useGetFavouriteQuery(id: number) {
  return useQuery({
    queryKey: ["favourites", id],
    queryFn: () => getFavourite(id),
  });
}
