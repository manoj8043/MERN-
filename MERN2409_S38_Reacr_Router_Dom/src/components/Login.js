import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <Link to={"/dash"}>
          <button type="button">Login</button>
        </Link>
        <Link to={"/signin"}>
          <button type="button">Sign up</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
