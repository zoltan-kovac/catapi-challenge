import { toaster } from "@/lib/toaster";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Favourite } from "@thatapicompany/thecatapi/dist/types";
import { addFavourite, deleteFavourite } from "./api";

export function useDeleteFavouriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteFavourite"],
    mutationFn: (favouriteId: number) => deleteFavourite(favouriteId),

    onError: () => {
      toaster.create({
        title: "Failed to add to favourites",
        type: "error",
      });
    },
    onSettled: () => {
      if (queryClient.isMutating({ mutationKey: ["deleteFavourite"] }) === 1) {
        queryClient.invalidateQueries({ queryKey: ["favourites"] });

        toaster.create({
          title: "Deleted from favourites",
          type: "info",
        });
      }
    },
  });
}

export function useAddFavouriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addFavourite"],
    mutationFn: (imageId: string) => addFavourite(imageId),
    onMutate: async (newFavourite) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["favourites"] });

      // Snapshot the previous value
      const prevFavourites = queryClient.getQueryData(["favourites"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["favourites"], (oldFavourites: Favourite[]) => [
        ...oldFavourites,
        newFavourite,
      ]);

      // Return a context object with the snapshotted value
      return { prevFavourites };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (_err, _newFavourite, context) => {
      queryClient.setQueryData(["favourites"], context?.prevFavourites);
      toaster.create({
        title: "Failed to add to favourites",
        type: "error",
      });
    },
    onSettled: () => {
      if (queryClient.isMutating({ mutationKey: ["addFavourite"] }) === 1) {
        queryClient.invalidateQueries({ queryKey: ["favourites"] });

        toaster.create({
          title: "Added to favourites",
          type: "success",
        });
      }
    },
  });
}
