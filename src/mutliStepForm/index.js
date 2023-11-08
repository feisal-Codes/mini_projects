import React, { useEffect } from "react";
import PersonalInformation from "./components/personalInformation";
import FormProvider, { useStepsContext } from "./context/formProvider";
import Address from "./components/address";
import PrevButton from "./components/prevButton";
import NextButton from "./components/nextButton";
import VerifyInformation from "./components/verifyInformation";
import Success from "./components/success";

const MultiStepForm = () => {
  const { steps, totalSteps } = useStepsContext();
  let length = totalSteps.length - 1;
  console.log(steps);
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <>
      {steps === totalSteps[0] && <PersonalInformation />}
      {steps === totalSteps[1] && <Address />}
      {steps === totalSteps[2] && <VerifyInformation />}
      {steps === totalSteps[3] && <Success />}
      {steps < length && (
        <>
          <PrevButton />
          <NextButton />
        </>
      )}
    </>
  );
};

export default MultiStepForm;
