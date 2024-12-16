import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavourite, deleteFavourite } from "./api";

export function useDeleteFavouriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (favouriteId: number) => deleteFavourite(favouriteId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites", "all"] });
    },
  });
}

export function useAddFavouriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (imageId: string) => addFavourite(imageId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites", "all"] });
    },
  });
}
