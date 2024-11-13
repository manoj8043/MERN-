import React from "react";
import { useState } from "react";
import { useRef } from "react";
function Signin() {
  let [profilepic, setprofilepic] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
  );
  let MsgLabelRef = useRef();
  let StateSelectRef = useRef();
  let FirstNameInputRef = useRef();
  let LastNameInputRef = useRef();
  let AgeInputRef = useRef();
  let EmailInputRef = useRef();
  let selectedGender = useRef();
  let MaleRBInputRef = useRef();
  let FemaleRBInputRef = useRef();
  let Salutation = useRef();
  let MaritalStatusSelectRef = useRef();
  let EducationInputRef = {
    SSC: "false",
    Intermediate: "false",
    Graduation: "false",
    PostGraduation: "false",
    Other: "false",
  };
  console.log(EducationInputRef);
  let onCreateAccount = () => {
    if (selectedGender === "Male") {
      Salutation = "Mr.";
    } else {
      if (MaritalStatusSelectRef === "Married") {
        Salutation = "Mrs.";
      } else {
        Salutation = "Ms.";
      }
    }
    MsgLabelRef.current.innerHTML = `${Salutation} ${
      FirstNameInputRef.current.value
    } ${LastNameInputRef.current.value} had Completed his ${
      EducationInputRef.SSC === true ? "SSC" : ""
    } ${EducationInputRef.Intermediate === true ? ", Intermediate" : ""}
    ${EducationInputRef.Graduation === true ? ", Graduation" : ""}
    ${EducationInputRef.PostGraduation === true ? ", Post Graduation" : ""}
    ${EducationInputRef.Other === true ? ", Other" : ""} Eduction
    and ${selectedGender === "Male" ? "he" : "She"} belongs to ${
      StateSelectRef.current.value
    } has been successfully Registered with email ${
      EmailInputRef.current.value
    }`;
  };
  return (
    <div>
      <h1>Signin</h1>
      <form>
        <div>
          <label>Profile Pic</label>
          <input
            type="file"
            multiple
            onChange={(e) => {
              console.log(e.target.files);
              let Selectedimg = URL.createObjectURL(e.target.files[0]);
              console.log(Selectedimg);
              setprofilepic(Selectedimg);
            }}
          ></input>
        </div>
        <div>
          <label>First Name</label>
          <input type="text" ref={FirstNameInputRef}></input>
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" ref={LastNameInputRef}></input>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            ref={AgeInputRef}
            onBlur={(age) => {
              age = Number(AgeInputRef.current.value);
              if (age < 5) {
                console.log("Infant");
              } else if (age >= 5 && age < 18) {
                console.log("Teenager");
              } else if (age >= 18 && age < 30) {
                console.log("Adult");
              } else if (age >= 30 && age < 50) {
                console.log("Middle Age");
              } else if (age >= 50 && age < 80) {
                console.log("Senior Citizen");
              } else if (age >= 80 && age < 100) {
                console.log("Super Senior Citizen");
              } else {
                console.log("Invalid Age");
              }
            }}
          ></input>
        </div>

        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="Gender"
            ref={MaleRBInputRef}
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={() => (selectedGender = "Male")}
          />
          <span>Male</span>
          <input
            type="radio"
            name="Gender"
            ref={FemaleRBInputRef}
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={() => (selectedGender = "Female")}
          />
          <span>Female</span>
        </div>

        <div>
          <label>Marital Status</label>
          <input
            type="radio"
            name="MaritalStatus"
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={() => (MaritalStatusSelectRef = "Single")}
          />
          <span>Single</span>
          <input
            type="radio"
            name="MaritalStatus"
            style={{
              height: "15px",
              width: "15px",
            }}
            ref={MaritalStatusSelectRef}
            onChange={() => (MaritalStatusSelectRef = "Married")}
          />
          <span>Married</span>
        </div>
        <div>
          <label>Email</label>
          <input type="email" ref={EmailInputRef} />
        </div>
        <div>
          <label
            style={{
              height: "15px",
              width: "150px",
            }}
          >
            Education
          </label>
          <input
            type="checkbox"
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={(e) => {
              EducationInputRef.SSC = e.target.checked;
            }}
          />
          <span>SSC</span>
          <input
            type="checkbox"
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={(e) => {
              EducationInputRef.Intermediate = e.target.checked;
            }}
          />
          <span>Intermediate</span>
          <input
            type="checkbox"
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={(e) => {
              EducationInputRef.Graduation = e.target.checked;
            }}
          />
          <span>Graduation</span>
          <br />
          <input
            type="checkbox"
            style={{
              marginLeft: "150px",
              height: "15px",
              width: "15px",
            }}
            onChange={(e) => {
              EducationInputRef.PostGraduation = e.target.checked;
            }}
          />
          <span>Post Graduation</span>
          <input
            type="checkbox"
            style={{
              height: "15px",
              width: "15px",
            }}
            onChange={(e) => {
              EducationInputRef.Other = e.target.checked;
            }}
          />
          <span>Other</span>
        </div>
        <div>
          <label>State</label>
          <select ref={StateSelectRef}>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jammu and Kashmir</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
            <option>Andaman and Nicobar Islands</option>
            <option>Chandigarh</option>
            <option>Dadra and Nagar Haveli and Daman and Diu</option>
            <option>Delhi</option>
            <option>Lakshadweep</option>
            <option>Puducherry</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              if (
                FirstNameInputRef.current.value === "" ||
                LastNameInputRef.current.value === "" ||
                EmailInputRef.current.value === ""
              ) {
                alert("Please fill all the fields");
              } else {
                onCreateAccount();
              }
              console.log(EducationInputRef);
            }}
          >
            Sign in
          </button>
        </div>
        <div className="Resultdiv">
          <img src={profilepic} alt=""></img>
          <label ref={MsgLabelRef}></label>
        </div>
      </form>
    </div>
  );
}

export default Signin;
