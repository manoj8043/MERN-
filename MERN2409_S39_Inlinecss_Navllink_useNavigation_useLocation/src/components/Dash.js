import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navtab from "./Navtab";

function Dash() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          width: "50%",
          marginLeft: "21%",
          marginRight: "22%",
          color: "white",
        }}
      >
        <h2>
          {location &&
          location.state &&
          location.state.username &&
          location.state.username.msg
            ? location.state.username.msg
            : ""}
        </h2>
      </div>
      <div
        style={{
          backgroundColor: "White",
          width: "65%",
          height: "500px",
          marginLeft: "17%",
          marginRight: "17%",
          marginTop: "2%",
        }}
      >
        <Navtab></Navtab>
        <hr></hr>
      </div>

      <NavLink
        to={"/"}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <button style={{ backgroundColor: "red" }} type="button">
          Logout➜
        </button>
      </NavLink>
    </div>
  );
}

export default Dash;
