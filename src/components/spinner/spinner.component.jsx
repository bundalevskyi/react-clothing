import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => {
  return (
    <div>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </div>
  );
};

export default Spinner;
