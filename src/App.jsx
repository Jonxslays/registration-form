import { useState } from "react";

import "./App.css";
import Input from "./components/Input";

const App = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      error:
        "Username must be 5-25 characters, and not include special characters.",
      pattern: "^[a-zA-Z0-9]{5,25}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      error: "Please use a valid email address.",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      error:
        "Password must be 8-25 characters, include 1 letter, 1 number, and 1 symbol.",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$",
    },
    {
      id: 4,
      name: "passwordConfirm",
      type: "password",
      placeholder: "Confirm Password",
      error: "Passwords do not match.",
      label: "Confirm Password",
      pattern: state.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {inputs.map((input) => (
          <Input
            {...input}
            key={input.id}
            value={state[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button>Submit Registration</button>
      </form>
    </div>
  );
};

export default App;
