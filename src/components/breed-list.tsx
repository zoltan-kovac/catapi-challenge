import { Stack, Tag, TagLabel } from "@chakra-ui/react";
import type * as React from "react";
import { NavLink, useParams } from "react-router-dom";
import type { Breed } from "../app/breeds/types";

type BreedListProps = {
  breeds: {
    pages?: Array<Breed[]>;
  };
};

export default function BreedList({ breeds }: BreedListProps) {
  const { breedId } = useParams<{ breedId: string }>();

  return breeds ? (
    <>
      {!breedId && (
        <Stack gap={4}>
          {breeds?.pages?.map((page: Breed[]) => {
            return page?.map(({ name, id }) => {
              return (
                // <Tag size="lg" borderRadius="full" key={`tab-${id}`}>
                <NavLink key={`breed-${id}`} to={`/breeds/${id}`}>
                  <TagLabel>{name}</TagLabel>
                </NavLink>
                // </Tag>
              );
            });
          })}
        </Stack>
      )}
    </>
  ) : (
    <>No breeds</>
  );
}
