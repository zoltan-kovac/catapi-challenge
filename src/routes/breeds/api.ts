import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CatImage, SearchCatQueryParams } from "../cats/types";
import { headers } from "../../api";

export async function getBreedQuery(breedId?: string): Promise<CatImage[]> {
  return await axios
    .get(`https://api.thecatapi.com/v1/breeds/${breedId}`, {
      headers,
    })
    .then((response) => response.data);
}

export function useBreedQuery(breedId: string) {
  return useQuery({
    queryKey: ["breeds", breedId],
    queryFn: () => getBreedQuery(),
    enabled: breedId != null,
  });
}

export async function getBreedsQuery(
  params?: SearchCatQueryParams
): Promise<CatImage[]> {
  const defaultParams = {
    limit: 10,
    page: 0,
  };

  return await axios
    .get(`https://api.thecatapi.com/v1/breeds`, {
      headers,
      params: {
        ...defaultParams,
        page: params?.pageParam || 0,
      },
    })
    .then((response) => response.data);
}

export function useBreedsQuery() {
  return useInfiniteQuery({
    queryKey: ["breeds"],
    queryFn: (params) => getBreedsQuery(params),
    getNextPageParam: (_, allPages) => allPages.length,
  });
}
