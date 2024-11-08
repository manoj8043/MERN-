import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  let emailInput = useRef();
  let navigate = useNavigate();
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label> Username:</label>
        <input type="text" name="username" />
        <br />
        <label> Email:</label>
        <input type="email" name="email" ref={emailInput} />
        <label> Phone:</label>
        <input type="number" name="phone" />
        <br />
        <label> Password:</label>
        <input type="password" name="password" />
        <br />
        <label> Confirm Password:</label>
        <input type="password" name="password" />
        <br />
        <NavLink to="/">
          <button type="button">Login</button>
        </NavLink>

        <button
          type="button"
          onClick={() => {
            let email = emailInput.current.value;
            if (email === "") {
              alert("Please fill in all fields");
            } else {
              navigate("/goto", {
                state: { email: { msg: email } },
              });
            }
          }}
        >
          Submit
        </button>

        <br></br>
      </form>
    </div>
  );
}

export default Signin;
