import type { Favourite } from "@thatapicompany/thecatapi/dist/types";
import { api } from "../../lib/api";

export type FavouritesById = Record<string, Favourite>;

export async function getFavourites(): Promise<Favourite[]> {
  return await api.favourites.getFavourites();
}

export async function getFavourite(id: number): Promise<Favourite> {
  return await api.favourites.getFavourite(id);
}

export async function addFavourite(imageId: string): Promise<unknown> {
  return await api.favourites.addFavourite(imageId);
}

export async function deleteFavourite(id: number): Promise<unknown> {
  return await api.favourites.deleteFavourite(id);
}
