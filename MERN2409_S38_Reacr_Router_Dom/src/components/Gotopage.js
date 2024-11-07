import React from "react";
import { Link } from "react-router-dom";

function Gotopage() {
  return (
    <div>
      <h1>Your Accouct has been Created successfully ✅</h1>
      <h2>Click on the link below to go to the login page</h2>
      <Link to="/">
        <button type="button">Login</button>
      </Link>
    </div>
  );
}

export default Gotopage;
