import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import type { Image } from "@thatapicompany/thecatapi/dist/types";
import axios from "axios";
import { headers } from "../../lib/api";
import type { Breed } from "./types";

export async function getBreedQuery(breedId?: string): Promise<Breed> {
  return await axios
    .get(`https://api.thecatapi.com/v1/breeds/${breedId}`, {
      headers,
    })
    .then((response) => response.data);
}

export function useBreedQuery(breedId?: string) {
  return useQuery({
    queryKey: ["breeds", breedId],
    queryFn: () => getBreedQuery(breedId),
    enabled: breedId != null,
  });
}

export async function getBreedsQuery(page?: number): Promise<Image[]> {
  const defaultParams = {
    limit: 10,
    page: 0,
  };

  return await axios
    .get("https://api.thecatapi.com/v1/breeds", {
      headers,
      params: {
        ...defaultParams,
        page,
      },
    })
    .then((response) => response.data);
}

export function useBreedsQuery() {
  return useInfiniteQuery({
    queryKey: ["breeds"],
    queryFn: ({ pageParam }) => getBreedsQuery(pageParam),
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => allPages.length,
  });
}
