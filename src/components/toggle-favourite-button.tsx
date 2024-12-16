import {
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
} from "@/app/favourites/mutations";
import { useFavouriteByImageId } from "@/app/favourites/queries";
import { IconButton, type IconButtonProps } from "@chakra-ui/react";
import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa";

export const MotionIconButton = motion(IconButton);

interface ToggleFavouriteButtonProps extends IconButtonProps {
  imageId: string;
}

export default function ToggleFavouriteButton({
  imageId,
}: ToggleFavouriteButtonProps) {
  const { data: favourite, isFetching } = useFavouriteByImageId(imageId);
  const { mutate: addFavourite } = useAddFavouriteMutation();
  const { mutate: deleteFavourite } = useDeleteFavouriteMutation();

  const isFavourite = favourite?.id != null;
  console.log("isFetching", isFetching);

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
      {...(isFavourite && { color: "red" })}
    >
      <FaHeart />
    </MotionIconButton>
  );
}
