import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const { label, handleChange, id, error, ...rest } = props;
  const [validate, setValidate] = useState(false);
  const handleValidate = () => setValidate(true);

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...rest}
        onChange={handleChange}
        onBlur={handleValidate}
        onFocus={() => props.name === "passwordConfirm" && handleValidate()}
        validate={validate.toString()}
        required
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
