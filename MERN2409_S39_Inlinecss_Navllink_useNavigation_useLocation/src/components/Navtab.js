import React from "react";
import { NavLink } from "react-router-dom";

function Navtab() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
      <NavLink to="/Timetables">Timetables</NavLink>
    </nav>
  );
}

export default Navtab;
