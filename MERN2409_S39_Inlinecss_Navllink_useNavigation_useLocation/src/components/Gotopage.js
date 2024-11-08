import React from "react";
import { Link, useLocation } from "react-router-dom";

function Gotopage() {
  let location = useLocation();
  return (
    <div>
      <h1>Your Accouct has been Created successfully ✅ with </h1>
      <h2>
        {location &&
          location.state &&
          location.state.email &&
          location.state.email.msg}
      </h2>
      <h2>Click on the link below to go to the login page</h2>

      <Link to="/">
        <button type="button">Login</button>
      </Link>
    </div>
  );
}

export default Gotopage;
