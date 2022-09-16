import React from "react";

import "./Response.css";

const Response = ({ response }) => {
  return (
    <div className="response">
      {response.error ? (
        <div className="response-error">
          An error occurred registering the user: {response.error}
        </div>
      ) : (
        <div className="response-success">
          <div className="response-title">User registered!</div>
          <div className="response-item">
            <b>User ID:</b> {response.id}
          </div>
          <div className="response-item">
            <b>Username:</b> {response.username}
          </div>
        </div>
      )}
    </div>
  );
};

export default Response;
