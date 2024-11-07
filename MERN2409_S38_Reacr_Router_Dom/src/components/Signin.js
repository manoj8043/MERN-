import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label> Username:</label>
        <input type="text" name="username" />
        <br />
        <label> Email:</label>
        <input type="email" name="email" />
        <br />
        <label> Phone:</label>
        <input type="number" name="phone" />
        <br />
        <label> Password:</label>
        <input type="password" name="password" />
        <br />
        <label> Confirm Password:</label>
        <input type="password" name="password" />
        <br />
        <Link to="/">
          <button type="button">Login</button>
        </Link>
        <Link to="/goto">
          <button type="button">Submit</button>
        </Link>
        <br></br>
      </form>
    </div>
  );
}

export default Signin;
