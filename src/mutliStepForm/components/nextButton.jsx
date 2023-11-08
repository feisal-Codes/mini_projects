import React from "react";
import { useFormContext, useStepsContext } from "../context/formProvider";

const NextButton = () => {
  const {
    steps,
    setSteps,
    totalSteps,
    isCompleted,
    setIsCompleted,
  } = useStepsContext();

  const { formData } = useFormContext();
  let length = totalSteps.length - 1;
  const handleUpdateStep = (e) => {
    if (isCompleted && steps < totalSteps.length - 1) {
      setSteps(totalSteps[steps + 1]);
    }
  };
  const handleSubmit = () => {
    setIsCompleted(true);
    console.log(formData);
    setSteps(totalSteps[totalSteps.length - 1]);
  };
  return (
    <>
      {steps < length - 1 ? (
        <button
          disabled={!isCompleted || steps === totalSteps.length - 1}
          onClick={handleUpdateStep}
        >
          Next
        </button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </>
  );
};

export default NextButton;
