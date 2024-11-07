import React from "react";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <div>
      <h1>404 Page Not Found ❌</h1>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <h2>Click on the link below to go to the login page</h2>
      <Link to="/">
        <button type="button">Login</button>
      </Link>
    </div>
  );
}

export default Pagenotfound;
