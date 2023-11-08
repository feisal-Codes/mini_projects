import React, { useEffect, useState } from "react";
import Input from "./input";
import { useFormContext, useStepsContext } from "../context/formProvider";
import NextButton from "./nextButton";

const PersonalInformation = () => {
  const { formData, updateFormData } = useFormContext();

  const [formValues, setFormValues] = useState({
    firstName: formData.firstName || "",
    lastName: formData.lastName || "",
    email: formData.email || "",
  });
  const { isCompleted, setIsCompleted } = useStepsContext();
  console.log("***************");
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    if (
      formValues.firstName === "" ||
      formValues.lastName === "" ||
      formValues.email === ""
    ) {
      return;
    }

    updateFormData(formValues);
    setIsCompleted(true);
  };

  console.log(formData);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formValues.firstName}
          label={"First Name"}
        />
        <Input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formValues.lastName}
          label={"Last Name"}
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={formValues.email}
          label={"Email"}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default PersonalInformation;
