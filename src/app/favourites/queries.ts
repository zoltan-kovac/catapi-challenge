import { useQuery } from "@tanstack/react-query";
import type { Favourite } from "@thatapicompany/thecatapi/dist/types";
import { useCallback } from "react";
import { getFavourite, getFavourites } from "./api";

export function useGetFavouritesQuery(
  select?: (data: Favourite[]) => Favourite | undefined,
) {
  return useQuery({
    queryFn: getFavourites,
    queryKey: ["favourites", "all"],
    select,
  });
}

export function useFavouriteByImageId(imageId: string) {
  return useGetFavouritesQuery(
    useCallback(
      (data: Favourite[]) =>
        data.find((favourite) => imageId === favourite.imageId),
      [imageId],
    ),

    // Transform to Record<string, Favourite>
    // useCallback(
    //   (data: Favourite[]) =>
    //     data.reduce((acc: Record<string, Favourite>, fav) => {
    //       acc[fav.imageId] = fav;

    //       return acc;
    //     }, {}),
    //   [],
    // ),
  );
}

export function useGetFavouriteQuery(id: number) {
  return useQuery({
    queryKey: ["favourites", id],
    queryFn: () => getFavourite(id),
  });
}
