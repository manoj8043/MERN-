import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Navtab from "./components/Navtab";
import { useSelector } from "react-redux";

function Editprofile() {
  let navigate = useNavigate();
  let firstnameInputRef = useRef();
  let lastnameInputRef = useRef();
  let dobInputRef = useRef();
  let emailInputRef = useRef();
  let phoneInputRef = useRef();
  let departmentInputRef = useRef();
  let designationInputRef = useRef();
  let cityInputRef = useRef();
  let joiningdateInputRef = useRef();
  let profileimageInputRef = useRef();
  let passwordInputRef = useRef();
  let GenderInputRef = useRef();
  let EmployeeIDInputRef = useRef();

  let [profileImage, setProfileImage] = useState("./imgs/profile.png");

  let UserDetails = useSelector((state) => {
    return state.userDetails;
  });

  useEffect(() => {
    firstnameInputRef.current.value = UserDetails.first_name;
    lastnameInputRef.current.value = UserDetails.last_name;
    dobInputRef.current.value = UserDetails.dob;
    emailInputRef.current.value = UserDetails.email;
    phoneInputRef.current.value = UserDetails.phone_number;
    departmentInputRef.current.value = UserDetails.department;
    designationInputRef.current.value = UserDetails.designation;
    cityInputRef.current.value = UserDetails.city;
    joiningdateInputRef.current.value = UserDetails.joining_date;
    EmployeeIDInputRef.current.value = UserDetails.employee_id;
    setProfileImage(`http://localhost:3001/${UserDetails.profile_image}`);
  }, []);

  let onUpdateProfile = async () => {
    let dataToSend = new FormData();
    dataToSend.append("employee_id", EmployeeIDInputRef.current.value);
    dataToSend.append("first_name", firstnameInputRef.current.value);
    dataToSend.append("last_name", lastnameInputRef.current.value);
    dataToSend.append("dob", dobInputRef.current.value);
    // dataToSend.append("age", ageInputRef.current.value);
    dataToSend.append("gender", GenderInputRef.current.value);
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("phone_number", phoneInputRef.current.value);
    dataToSend.append("department", departmentInputRef.current.value);
    dataToSend.append("designation", designationInputRef.current.value);
    dataToSend.append("city", cityInputRef.current.value);
    dataToSend.append("joining_date", joiningdateInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    dataToSend.append("profileImage", profileimageInputRef.current.files[0]);

    let age = moment().diff(
      moment(dobInputRef.current.value, "YYYY-MM-DD"),
      "years"
    );
    dataToSend.set("age", age);

    let reqOptions = {
      method: "PATCH",
      body: dataToSend,
    };

    let JSONdata = await fetch(
      "http://localhost:3001/updateprofile",
      reqOptions
    );
    let JSOdata = await JSONdata.json();
    alert(JSOdata.msg);

    if (JSOdata.status === "success") {
      navigate("/");
    }
  };

  return (
    <div>
      <Navtab></Navtab>
      <h2>Edit Profile</h2>
      <form>
        <div>
          <img
            src={profileImage}
            alt="Profile Preview"
            className="ProfilepicPreview"
          />
        </div>
        <div className="inputdiv">
          <label>First Name</label>
          <input type="text" name="first_name" ref={firstnameInputRef} />
        </div>
        <div className="inputdiv">
          <label>Last Name</label>
          <input type="text" name="last_name" ref={lastnameInputRef} />
        </div>
        <div className="inputdiv">
          <label>Date of Birth</label>
          <input type="date" name="dob" ref={dobInputRef} />
        </div>

        <div className="inputdiv">
          <label>Gender</label>
          <select ref={GenderInputRef}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="inputdiv">
          <label>Email</label>
          <input type="email" name="email" ref={emailInputRef} />
        </div>
        <div className="inputdiv">
          <label>Phone Number</label>
          <input type="text" name="phone_number" ref={phoneInputRef} />
        </div>
        <div className="inputdiv">
          <label>Employee ID</label>
          <input
            type="text"
            name="employee_id"
            ref={EmployeeIDInputRef}
            readOnly
          />
        </div>
        <div className="inputdiv">
          <label>Designation</label>
          <input type="text" name="designation" ref={designationInputRef} />
        </div>
        <div className="inputdiv">
          <label>Department</label>
          <select ref={departmentInputRef}>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </div>
        <div className="inputdiv">
          <label>City</label>
          <input type="text" name="city" ref={cityInputRef} />
        </div>
        <div className="inputdiv">
          <label>Joining Date</label>
          <input type="date" name="joining_date" ref={joiningdateInputRef} />
        </div>
        <div className="inputdiv">
          <label>Profile Image</label>
          <input
            type="file"
            name="profile_image"
            ref={profileimageInputRef}
            onChange={(event) => {
              let SelectedProfilePic = URL.createObjectURL(
                event.target.files[0]
              );
              setProfileImage(SelectedProfilePic);
            }}
          />
        </div>
        <div className="inputdiv">
          <label>Password</label>
          <input type="password" name="password" ref={passwordInputRef} />
        </div>
        <button
          type="button"
          onClick={() => {
            // navigate("/Homepage");
            onUpdateProfile();
          }}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Editprofile;
