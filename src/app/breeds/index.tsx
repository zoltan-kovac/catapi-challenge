import { Button, Center, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreedList from "../../components/breed-list";
import { useBreedsQuery } from "./api";

const BreedsView: React.FC = (): JSX.Element => {
  const { breedId } = useParams<{ breedId: string }>();

  const {
    data: breeds = {
      pages: [],
    },
    isLoading,
    fetchNextPage,
    isFetching,
  } = useBreedsQuery();

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <BreedList breeds={breeds} />
      )}
      {!breedId && (
        <Center>
          <Button
            my={5}
            size="lg"
            onClick={() => fetchNextPage()}
            disabled={isFetching}
          >
            More breeds please!
          </Button>
        </Center>
      )}
    </>
  );
};

export default BreedsView;
