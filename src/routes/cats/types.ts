export type Breed = {
  id: string;
};

export type CatImage = {
  breeds?: Breed[];
  height?: string;
  id: string;
  url: string;
  width?: string;
};

export type SearchCatQueryParams = {
  pageParam?: number;
};
