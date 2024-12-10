import { Button, Icon, useToast } from "@chakra-ui/react";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { useFavCatMutation } from "../app/favourites/api";

type AddFavCatBtnProps = { id: string; disabled: boolean };

const AddFavCatBtn: React.FC<AddFavCatBtnProps> = ({
  id,
  disabled,
}): JSX.Element => {
  const addFavCat = useFavCatMutation(id);
  const toast = useToast();

  React.useEffect(() => {
    addFavCat.isSuccess
      ? toast({
          title: "Cat added to favourites.",
          status: "success",
          duration: 1000,
          isClosable: true,
        })
      : null;
  }, [addFavCat.isSuccess, toast]);

  const isDisabled = disabled || addFavCat.isSuccess;

  return (
    <Button
      colorScheme="green"
      onClick={() => addFavCat.mutate()}
      isLoading={addFavCat.isPending}
      disabled={isDisabled}
    >
      <Icon as={FaStar} />
    </Button>
  );
};

export default AddFavCatBtn;
