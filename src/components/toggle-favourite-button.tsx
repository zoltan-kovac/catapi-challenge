import {
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
} from "@/app/favourites/mutations";
import { useFavouriteIds } from "@/app/favourites/queries";
import { Icon, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

type ToggleFavouriteButtonProps = { id: string; disabled: boolean };

const ToggleFavouriteButton: React.FC<ToggleFavouriteButtonProps> = ({
  id,
  disabled,
}): JSX.Element => {
  const addFavImage = useAddFavouriteMutation(id); // image id
  const deleteFavImage = useDeleteFavouriteMutation(id); // favourite id
  const { data: favourites } = useFavouriteIds();

  const isFavourite = favourites?.includes(id);
  // const toast = useToast();

  // React.useEffect(() => {
  //   addFavCat.isSuccess
  //     ? toast({
  //         title: "Cat added to favourites.",
  //         status: "success",
  //         duration: 1000,
  //         isClosable: true,
  //       })
  //     : null;
  // }, [addFavCat.isSuccess, toast]);

  return (
    <IconButton
      onClick={() =>
        isFavourite ? deleteFavImage.mutate() : addFavImage.mutate()
      }
      rounded="full"
      variant="plain"
      disabled={disabled}
    >
      <Icon color="red">
        <FaHeart />
      </Icon>
    </IconButton>
  );
};

export default ToggleFavouriteButton;
