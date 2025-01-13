import React from "react";
import { useSelector } from "react-redux";
import Navtab from "./Navtab";
import { useNavigate } from "react-router-dom";
function Profile() {
  let navigate = useNavigate();
  let userDetails = useSelector((state) => {
    return state.userDetails;
  });

  let deleteProfile = async () => {
    let dataToSend = new FormData();
    dataToSend.append("employee_id", userDetails.employee_id);
    let reqOptions = {
      method: "DELETE",
      body: dataToSend,
    };
    let JSONdata = await fetch(
      "http://localhost:3001/deleteProfile",
      reqOptions
    );
    let JSOdata = await JSONdata.json();
    alert(JSOdata.msg);
    navigate("/Login");
  };

  return (
    <div>
      <Navtab></Navtab>
      <div>
        <button
          onClick={() => {
            navigate("/Editprofile");
          }}
        >
          Edit Profile
        </button>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            deleteProfile();
          }}
        >
          Delete Profile
        </button>
      </div>
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
          <p>Date of Birth:{userDetails.dob}</p>
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
