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
import { useCatQuery } from "../routes/cats/api";
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

  const { id, url } = data || {};

  const handleClose = () => {
    onClose();
    return navigate("/cats");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isFetching ? (
            <Spinner />
          ) : (
            <>
              {/* @ts-ignore */}
              <CatThumbnail url={url} id={id} />
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button variant="ghost">Fav</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CatDetail;
