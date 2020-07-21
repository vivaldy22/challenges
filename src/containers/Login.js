import React from "react";

const Login = (props) => {
  return (
    <div>
      <button onClick={props.onLogin}>Login</button>
    </div>
  );
};

export default Login;
