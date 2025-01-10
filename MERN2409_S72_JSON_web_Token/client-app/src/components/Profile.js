import React from "react";
import { useSelector } from "react-redux";
import Navtab from "./Navtab";

function Profile() {
  let userDetails = useSelector((state) => {
    return state.userDetails;
  });

  return (
    <div>
      <Navtab></Navtab>
      <div className="Details">
        <div>
          <img
            src={`http://localhost:3001/${userDetails.profile_image}`}
            alt=""
          ></img>
        </div>
        <div className="EmployeeDetails">
          <h3>Employee ID :{userDetails.employee_id}</h3>
          <p>
            Employee Name:{userDetails.first_name} {userDetails.last_name}
          </p>
          <p>Gender:{userDetails.gender}</p>
          <p>Age:{userDetails.age}</p>
          <p>Phone Number:{userDetails.phone_number}</p>
          <p>Email:{userDetails.email}</p>
          <p>Department:{userDetails.department}</p>
          <p>
            Designation:{userDetails.designation} - {userDetails.department}
          </p>

          <p>City:{userDetails.city}</p>

          <p>Date of Joining:{userDetails.joining_date}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
