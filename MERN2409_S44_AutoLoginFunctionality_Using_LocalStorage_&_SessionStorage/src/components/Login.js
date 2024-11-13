import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let UsernameInput = useRef();
  let PasswordInput = useRef();
  useEffect(() => {
    UsernameInput.current.value = localStorage.getItem("username");
    PasswordInput.current.value = localStorage.getItem("Password");

    if (localStorage.getItem("username") && localStorage.getItem("Password")) {
      validateLogin();
    }
  }, []);

  let validateLogin = () => {
    let Username = UsernameInput.current.value;
    let Password = PasswordInput.current.value;

    if (Username === "" || Password === "") {
      alert("Please fill in all fields");
    }
    if (Username === "admin1" && Password === "12345678") {
      localStorage.setItem("username", UsernameInput.current.value);
      localStorage.setItem("Password", PasswordInput.current.value);
      sessionStorage.setItem("username", UsernameInput.current.value);
      sessionStorage.setItem("Password", PasswordInput.current.value);

      navigate("/dash", {
        state: { username: { msg: "admin1" } },
      });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form>
        <label>Username: </label>
        <input type="text" name="username" ref={UsernameInput} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" ref={PasswordInput} />
        <br />

        <button
          type="button"
          onClick={() => {
            validateLogin();
          }}
        >
          Login
        </button>

        <NavLink to={"/signin"}>
          <button type="button">Sign up</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
