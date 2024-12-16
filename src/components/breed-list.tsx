import { Stack, Tag, TagLabel } from "@chakra-ui/react";
import type * as React from "react";
import { useParams } from "react-router-dom";
import type { Breed } from "../app/breeds/types";
import { NavLink } from "./navigation/main-nav-link";

type BreedListProps = {
  breeds: {
    pages?: Array<Breed[]>;
  };
};

const BreedList: React.FC<BreedListProps> = ({ breeds }): JSX.Element => {
  const { breedId } = useParams<{ breedId: string }>();

  return breeds ? (
    <>
      {!breedId && (
        <Stack spacing={4}>
          {breeds?.pages?.map((page: Breed[]) => {
            return page?.map(({ name, id }) => {
              return (
                <Tag size="lg" borderRadius="full" key={`tab-${id}`}>
                  <NavLink to={`/breeds/${id}`}>
                    <TagLabel>{name}</TagLabel>
                  </NavLink>
                </Tag>
              );
            });
          })}
        </Stack>
      )}
    </>
  ) : (
    <>No breeds</>
  );
};

export default BreedList;
