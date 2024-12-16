import { api } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavourite } from "./api";

export function useDeleteFavouriteMutation(id: number) {
  return useMutation({
    mutationFn: () => deleteFavourite(id),
  });
}

export function useAddFavouriteMutation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.favourites.addFavourite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });
}
