import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { headers } from "../../lib/api";
import type { FavouriteCat } from "./types";

export async function getFavsQuery(): Promise<FavouriteCat[]> {
  return await axios
    .get("https://api.thecatapi.com/v1/favourites", {
      headers,
    })
    .then((response) => response.data);
}

export function useGetFavsQuery() {
  return useQuery({
    queryKey: ["favourites"],
    queryFn: getFavsQuery,
  });
}

export async function deleteFavCatQuery(
  favouriteId?: string,
): Promise<unknown> {
  return await axios.delete(
    `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
    {
      headers,
    },
  );
}

export function useDeleteFavCatMutation() {
  return useMutation({
    mutationFn: deleteFavCatQuery,
  });
}

export function useFavCatMutation(catId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return axios.post(
        "https://api.thecatapi.com/v1/favourites",
        { image_id: catId },
        {
          headers,
        },
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });
}
