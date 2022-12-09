import axios from "axios";
import qs from "qs";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CatImage, SearchQueryParams } from "./types";
import { headers } from "../../api";

export async function getRandomCatsQuery(
  params?: SearchQueryParams
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
        ...params,
        page: params?.pageParam || 0,
      },

      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: "comma" }),
      },
    })
    .then((response) => response.data);
}

export function useCatsQuery(params?: SearchQueryParams) {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: () => getRandomCatsQuery(params),
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
