import React from "react";
import { Link } from "react-router-dom";
import NameInput from "./Login";

function Dash() {
  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <Link to={"/"}>
        <button type="button">Logout➜</button>
      </Link>
      <span>{NameInput} </span>
      <div>
        <h2>Welcome to the Dashboard </h2>
        <p>Here you can see all the details of your account</p>
      </div>
    </div>
  );
}

export default Dash;
