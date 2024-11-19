import React from "react";

import { LoadingOverlay, LoadingSpinner } from "./style";

export const Loading: React.FC = () => {
  return (
    <LoadingOverlay>
      <LoadingSpinner />
    </LoadingOverlay>
  );
};
