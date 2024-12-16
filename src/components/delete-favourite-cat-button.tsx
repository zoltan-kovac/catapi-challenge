import { Button, Icon } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useDeleteFavCatMutation } from "../app/favourites/api";

type DeleteFavCatBtnProps = { id?: string; onSuccess?: () => void };

const DeleteFavCatBtn: React.FC<DeleteFavCatBtnProps> = ({
  id,
  onSuccess,
}): JSX.Element => {
  const deleteFavCat = useDeleteFavCatMutation();
  // const toast = useToast();

  const disabled = deleteFavCat.isSuccess || id == null;

  // React.useEffect(() => {
  //   deleteFavCat.isSuccess
  //     ? toast({
  //         title: "Removed from favourites.",
  //         status: "error",
  //         duration: 1000,
  //         isClosable: true,
  //       }) && onSuccess?.()
  //     : null;
  // }, [deleteFavCat.isSuccess, toast, onSuccess]);

  // React.useEffect(() => {
  //   deleteFavCat.isError
  //     ? toast({
  //         title: "Failed to remove from favs.",
  //         status: "error",
  //         duration: 1000,
  //         isClosable: true,
  //       })
  //     : null;
  // }, [deleteFavCat.isError, toast]);

  return (
    <Button
      colorScheme="red"
      onClick={() => deleteFavCat.mutate(id)}
      // isLoading={deleteFavCat.isPending}
      disabled={disabled}
    >
      <Icon as={FaTrash} />
    </Button>
  );
};

export default DeleteFavCatBtn;
