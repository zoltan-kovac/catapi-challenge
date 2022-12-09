import axios from "axios";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { CatImage, SearchCatQueryParams } from "./types";
import { headers } from "../../api";

export async function getRandomCatsQuery(
  params?: SearchCatQueryParams
): Promise<CatImage[]> {
  const defaultParams = {
    limit: 10,
    page: 0,
  };

  return await axios
    .get(`https://api.thecatapi.com/v1/images/search`, {
      headers,
      params: {
        ...defaultParams,
        page: params?.pageParam || 0,
      },
    })
    .then((response) => response.data);
}

export function useCatsQuery() {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: (params) => getRandomCatsQuery(params),
    getNextPageParam: (_, allPages) => allPages.length,
  });
}

export async function getCatQuery(catId?: string): Promise<CatImage> {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/${catId}`, {
      headers,
    })
    .then((response) => response.data);
}

export function useCatQuery(catId?: string) {
  return useQuery({
    queryKey: ["cats", catId],
    queryFn: () => getCatQuery(catId),
    enabled: catId != null,
  });
}
