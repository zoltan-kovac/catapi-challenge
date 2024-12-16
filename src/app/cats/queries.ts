import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import type {
  Image,
  SearchImagesFilter,
} from "@thatapicompany/thecatapi/dist/types";
import { api } from "../../lib/api";

export async function getRandomImages({
  page,
}: SearchImagesFilter): Promise<Image[]> {
  return await api.images.searchImages({
    limit: 10,
    page: page ?? 0,
    hasBreeds: true,
    mimeTypes: ["png"],
  });
}

export function useCatsQuery() {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: ({ pageParam }) => {
      return getRandomImages({ page: pageParam });
    },
    initialPageParam: 0,
    staleTime: 60000,
    getNextPageParam: (_lastPage, allPages) => allPages.length,
  });
}

export async function getCatQuery(catId: string): Promise<Image> {
  return await api.images.getImage(catId);
}

export function useCatQuery(catId: string) {
  return useQuery({
    queryKey: ["cats", catId],
    queryFn: () => getCatQuery(catId),
    enabled: catId != null,
  });
}
