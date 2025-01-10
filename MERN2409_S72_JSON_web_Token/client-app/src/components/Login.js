import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  let employeeIDInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      onValidate();
    }
  }, []);

  //sending token to backend
  let onValidate = async () => {
    let dataToSend = new FormData();
    dataToSend.append("token", localStorage.getItem("token"));
    let myHeaders = new Headers();
    myHeaders.append("content-type", "application/x-www-form-urlencoded");

    let reqOptions = {
      method: "POST",
      body: dataToSend,
      headder: myHeaders,
    };
    let JSONdata = await fetch(
      "http://localhost:3001/validatetoken",
      reqOptions
    );
    let JSOdata = await JSONdata.json();
    console.log(JSOdata);

    if (JSOdata.status === "success") {
      dispatch({ type: "login", data: JSOdata.data });
      navigate("/Homepage");
    } else {
      alert(JSOdata.msg);
    }
  };

  let onLogin = async () => {
    let dataToSend = new FormData();
    dataToSend.append("employee_id", employeeIDInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);

    let myHeaders = new Headers();
    myHeaders.append("content-type", "application/x-www-form-urlencoded");

    let reqOptions = {
      method: "POST",
      body: dataToSend,
      headder: myHeaders,
    };
    let JSONdata = await fetch("http://localhost:3001/login", reqOptions);
    let JSOdata = await JSONdata.json();
    console.log(JSOdata);

    if (JSOdata.status === "success") {
      localStorage.setItem("token", JSOdata.data.token);
      dispatch({ type: "login", data: JSOdata.data });
      navigate("/Homepage");
    } else {
      alert(JSOdata.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Employee ID</label>
          <input type="text" ref={employeeIDInputRef} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={passwordInputRef} />
        </div>

        <button
          type="button"
          onClick={() => {
            onLogin();
          }}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          New User
        </button>
      </form>
    </div>
  );
}

export default Login;
