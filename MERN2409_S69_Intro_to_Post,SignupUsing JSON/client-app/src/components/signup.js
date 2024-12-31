import React from "react";
import { useRef } from "react";

function Signup() {
  let firstnameInputRef = useRef();
  let lastnameInputRef = useRef();
  let dobInputRef = useRef();
  let ageInputRef = useRef();
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

  let onSignUsingJSON = async () => {
    let datatoSendJSO = {
      employee_id: EmployeeIDInputRef.current.value,
      firstName: firstnameInputRef.current.value,
      lastName: lastnameInputRef.current.value,
      dob: dobInputRef.current.value,
      age: ageInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
      department: departmentInputRef.current.value,
      designation: designationInputRef.current.value,
      city: cityInputRef.current.value,
      joiningDate: joiningdateInputRef.current.value,
      profileImage: profileimageInputRef.current.value,
      password: passwordInputRef.current.value,
      gender: GenderInputRef.current.value,
    };

    let datatoSendJSON = JSON.stringify(datatoSendJSO);
    console.log(datatoSendJSO);
    console.log(datatoSendJSON);
    let myHeadders = new Headers();
    myHeadders.append("Content-Type", "application/json");

    let reqOptions = {
      method: "POST",
      body: datatoSendJSON,
      headers: myHeadders,
    };

    let JSONdata = await fetch("http://localhost:3001/signup", reqOptions);
    let JSOdata = await JSONdata.json();
    console.log(JSOdata);
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <div>
        <form>
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
            <label>Age</label>
            <input type="number" name="age" ref={ageInputRef} />
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
            <input type="text" name="employee_id" ref={EmployeeIDInputRef} />
          </div>
          <div className="inputdiv">
            <label>Designation</label>
            <input type="text" name="designation" ref={designationInputRef} />
          </div>
          <div className="inputdiv">
            <label>Department</label>
            <select ref={departmentInputRef} className="inputdiv">
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
            />
          </div>
          <div className="inputdiv">
            <label>Password</label>
            <input type="password" name="password" ref={passwordInputRef} />
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                onSignUsingJSON();
                alert("Signup successful \n Redirecting to Homepage");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
