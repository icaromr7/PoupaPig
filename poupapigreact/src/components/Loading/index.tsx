import React from "react";


import { LoadingOverlay, PulsingSvg } from "./style";
import Ok from "../../assets/svg/ok.svg";


export const Loading: React.FC = () => {
  return (
    <LoadingOverlay>
      <PulsingSvg src={Ok} alt="Loading" />

    </LoadingOverlay>
  );
};
