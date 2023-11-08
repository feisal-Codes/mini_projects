import React, { useEffect } from "react";
import { useStepsContext } from "../context/formProvider";

const PrevButton = () => {
  const { steps, setSteps, totalSteps } = useStepsContext();

  const handleClick = () => {
    if (steps > 0) {
      setSteps(totalSteps[steps - 1]);
    }
  };

  return (
    <button disabled={steps === 0} onClick={handleClick}>
      Previous
    </button>
  );
};

export default PrevButton;
