import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navtab() {
  let navigate = useNavigate();

  let userDetails = useSelector((state) => {
    return state.userDetails;
  });
  useEffect(() => {
    if (userDetails && userDetails.employee_id) {
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="LinksTabdiv">
        <Link to={"/Homepage"}>Home</Link>
        <Link>Settings</Link>
        <Link to={"/Profile"}>Profile</Link>
        <Link to={"/help"}>Help</Link>
        <Link>Feedback</Link>
        <Link>Account</Link>
        <Link>Security</Link>
        <Link>Privacy</Link>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          ➜
        </button>
      </div>
    </div>
  );
}

export default Navtab;
