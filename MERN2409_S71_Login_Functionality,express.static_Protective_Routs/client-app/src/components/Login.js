import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  let employeeIDInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  let dispach = useDispatch();

  let onLogin = async () => {
    let dataToSend = new FormData();
    dataToSend.append("employee_id", employeeIDInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);

    let myHeadders = new Headers();
    myHeadders.append("content-type", "application/x-www-form-urlencoded");

    let reqOptions = {
      method: "POST",
      body: dataToSend,
      headder: myHeadders,
    };
    let JSONdata = await fetch("http://localhost:3001/login", reqOptions);
    let JSOdata = await JSONdata.json();
    console.log(JSOdata);

    if (JSOdata.status === "success") {
      dispach({ type: "login", data: JSOdata.data });
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
