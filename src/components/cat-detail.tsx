import * as React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useCatQuery, useFavCatMutation } from "../routes/cats/api";
import CatThumbnail from "./cat-thumbnail";

type CatDetailProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CatDetail: React.FC<CatDetailProps> = ({
  onClose,
  isOpen,
}): JSX.Element => {
  const navigate = useNavigate();
  const { catId } = useParams<{ catId: string }>();
  const { data, isFetching } = useCatQuery(catId);
  const addToFavMutation = useFavCatMutation();

  const { id, url, breeds } = data || {};

  const handleClose = () => {
    onClose();
    return navigate("/cats");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {breeds ? breeds.map(({ name }) => name) : "No breed data"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isFetching ? (
            <Spinner />
          ) : (
            url && id && <CatThumbnail url={url} id={id} />
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          {catId && (
            <Button
              variant="ghost"
              onClick={() => addToFavMutation.mutate(catId)}
            >
              Fav
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CatDetail;
