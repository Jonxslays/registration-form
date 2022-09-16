import React from "react";

import "./Input.css";

const Input = (props) => {
  const { label, handleChange, id, ...rest } = props;

  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...rest} onChange={handleChange} />
    </div>
  );
};

export default Input;
