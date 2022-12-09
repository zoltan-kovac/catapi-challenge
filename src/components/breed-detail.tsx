import * as React from "react";
import { useParams } from "react-router-dom";

type BreedDetailProps = {};

const BreedDetail: React.FC<BreedDetailProps> = (): JSX.Element => {
  const { breedId } = useParams<{ breedId: string }>();

  return <>{breedId}</>;
};

export default BreedDetail;
