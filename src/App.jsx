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
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      name: "passwordConfirm",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  console.log(state);
  console.log("Re rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
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
