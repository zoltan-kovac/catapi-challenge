import {
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
} from "@/app/favourites/mutations";
import { useFavouriteByImageId } from "@/app/favourites/queries";
import { type BoxProps, Icon, IconButton } from "@chakra-ui/react";
import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa";

export const MotionIconButton = motion(IconButton);

interface ToggleFavouriteButtonProps extends BoxProps {
  imageId: string;
}

const ToggleFavouriteButton: React.FC<ToggleFavouriteButtonProps> = ({
  imageId,
}): JSX.Element => {
  const { data: favourite, isFetching } = useFavouriteByImageId(imageId);
  const { mutate: addFavourite } = useAddFavouriteMutation();
  const { mutate: deleteFavourite } = useDeleteFavouriteMutation();

  const isFavourite = favourite?.id != null;

  return (
    <MotionIconButton
      onClick={() =>
        isFavourite ? deleteFavourite(favourite.id) : addFavourite(imageId)
      }
      rounded="full"
      variant="plain"
      disabled={isFetching}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
    >
      <Icon
        color="transparent"
        stroke="red"
        strokeWidth="50"
        width="10"
        {...(isFavourite && { color: "red", strokeWidth: "0" })}
      >
        <FaHeart />
      </Icon>
    </MotionIconButton>
  );
};

export default ToggleFavouriteButton;
