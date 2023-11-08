import React, { useEffect } from "react";
import { useFormContext, useStepsContext } from "../context/formProvider";
import Input from "./input";

const VerifyInformation = () => {
  const { setIsCompleted } = useStepsContext();
  const { formData } = useFormContext();

  useEffect(() => {
    setIsCompleted(true);
  }, []);
  //   console.log(Object.entries(formData));
  for (let [name, value] of Object.entries(formData)) {
    console.log("name:", name);
    console.log("value:", value);
  }
  const data = Object.entries(formData).map(([name, value]) => ({
    [name]: value,
  }));

  return (
    <div>
      {data?.map((field) => (
        <div>
          <h4>
            {Object.keys(field)} : {Object.values(field)}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default VerifyInformation;
