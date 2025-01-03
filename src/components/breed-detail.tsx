import {
  Box,
  Center,
  Link,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalHeader,
  // ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useBreedQuery } from "../app/breeds/api";
import { useCatsQuery } from "../app/cats/queries";
// import CatThumbnail from "./cat-thumbnail";

const BreedDetail: React.FC = (): JSX.Element => {
  const { breedId } = useParams();
  const { open, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  const { data: breed } = useBreedQuery(breedId);
  const {
    data: cats = {
      pages: [],
    },
    isFetching,
  } = useCatsQuery();

  const { name } = breed || {};

  const handleClose = () => {
    onClose();
    return navigate("/breeds");
  };

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <></>
    // <Modal isOpen={isOpen} onClose={handleClose}>
    //   <ModalOverlay />
    //   <ModalContent>
    //     <ModalHeader>{name}</ModalHeader>
    //     <ModalCloseButton />
    //     <ModalBody>
    //       {!isFetching ? (
    //         cats?.pages?.map((page: CatImage[]) => {
    //           return page?.map(({ url, id }, index) => {
    //             return (
    //               <Box key={`${index}-${id}`}>
    //                 <Link
    //                   to={`/cats/${id}`}
    //                   as={RouterLink}
    //                   relative="path"
    //                   onClick={onOpen}
    //                 >
    //                   <CatThumbnail {...{ url, id }} />
    //                 </Link>
    //               </Box>
    //             );
    //           });
    //         })
    //       ) : (
    //         <Center>
    //           <Spinner />
    //         </Center>
    //       )}
    //     </ModalBody>
    //   </ModalContent>
    // </Modal>
  );
};

export default BreedDetail;
