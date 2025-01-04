import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import Data from "./Data";
import Navtab from "./Navtab";

function Homepage() {
  let navigate = useNavigate();

  let [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  setInterval(() => {
    setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, 1000);

  let userDetails = useSelector((state) => {
    return state.userDetails;
  });

  return (
    <div>
      <div className="HomepageTitle">
        <h2>Homepage</h2>
      </div>
      <Navtab />
      <div>
        <div>
          <Data />
        </div>
      </div>

      <div className="footerdiv">
        <marquee behavior="scroll" direction="left">
          {date}
        </marquee>
      </div>
    </div>
  );
}

export default Homepage;
