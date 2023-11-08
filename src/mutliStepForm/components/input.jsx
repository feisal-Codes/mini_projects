import React from "react";

const Input = ({ onChange, label, value, name, type, ...rest }) => {
  return (
    <label>
      {label}
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        {...rest}
      />
    </label>
  );
};

export default Input;
