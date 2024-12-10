import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import qs from "qs";
import { headers } from "../../lib/api";
import type { CatImage, SearchQueryParams } from "./types";

export async function getRandomCatsQuery({
  page,
  breed_ids,
}: SearchQueryParams): Promise<CatImage[]> {
  const defaultParams = {
    limit: 10,
    page: 0,
  };

  return await axios
    .get("https://api.thecatapi.com/v1/images/search", {
      headers,
      params: {
        ...defaultParams,
        page,
        breed_ids,
      },

      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: "comma" }),
      },
    })
    .then((response) => response.data);
}

export function useCatsQuery(breed_ids?: string) {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: ({ pageParam }) =>
      getRandomCatsQuery({ page: pageParam, breed_ids }),
    initialPageParam: 0,
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
