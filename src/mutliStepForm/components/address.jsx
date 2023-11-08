import React, { useState, useEffect } from "react";
import Input from "./input";
import NextButton from "./nextButton";
import { useFormContext, useStepsContext } from "../context/formProvider";

const Address = () => {
  const { formData, updateFormData } = useFormContext();

  const [formValues, setFormValues] = useState({
    phoneNumber: formData.phoneNumber || "",
    residence: formData.residence || "",
  });
  const { setIsCompleted } = useStepsContext();
  useEffect(() => {
    setIsCompleted(false);
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    if (formValues.phoneNumber === "" || formValues.residence === "") {
      setIsCompleted(false);

      return;
    }

    if (!Number(formValues.phoneNumber)) {
      setIsCompleted(false);
      console.log("*****************************8");

      return;
    }

    updateFormData(formValues);
    setIsCompleted(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="phoneNumber"
          type="text"
          minLength={12}
          maxLength={12}
          onChange={handleChange}
          value={formValues.phoneNumber}
          label="Phone Number"
        />
        <Input
          name="residence"
          type="text"
          onChange={handleChange}
          value={formValues.residence}
          label="Residence"
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Address;
