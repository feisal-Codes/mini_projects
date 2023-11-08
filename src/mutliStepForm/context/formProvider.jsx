import React, { createContext, useContext, useState } from "react";

//initialize a context instance
const FormContext = createContext({});
const StepsContext = createContext(null);

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [steps, setSteps] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const totalSteps = [0, 1, 2, 3];

  const updateFormData = (fields) => {
    // let updatedFormData = { ...formData, field };
    console.log("form context");
    console.log(fields);
    setFormData((prevState) => ({ ...prevState, ...fields }));
  };
  console.log(formData);
  return (
    <StepsContext.Provider
      value={{ steps, setSteps, totalSteps, isCompleted, setIsCompleted }}
    >
      <FormContext.Provider value={{ formData, updateFormData }}>
        {children}
      </FormContext.Provider>
    </StepsContext.Provider>
  );
};

export default FormProvider;

//hook that returns useContext
export const useFormContext = () => useContext(FormContext);
export const useStepsContext = () => useContext(StepsContext);
