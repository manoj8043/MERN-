import React from "react";
import { useRef } from "react";
function Signin() {
  let MsgLabelRef = useRef();
  let StateSelectRef = useRef();
  let FirstNameInputRef = useRef();
  let LastNameInputRef = useRef();
  let EmailInputRef = useRef();
  let PasswordInputRef = useRef();
  let AgeInputRef = useRef();
  let selectedGender = useRef();
  let MaleRBInputRef = useRef();
  let FemaleRBInputRef = useRef();
  let Salutation = useRef();
  let MaritalStatusSelectRef = useRef();

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
    MsgLabelRef.current.innerHTML = `${Salutation} ${FirstNameInputRef.current.value} ${LastNameInputRef.current.value}'s belongs to ${StateSelectRef.current.value} of age ${AgeInputRef.current.value} has been successfully created with email ${EmailInputRef.current.value}`;
  };
  return (
    <div>
      <h1>Signin</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={FirstNameInputRef}></input>
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" ref={LastNameInputRef}></input>
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
          <label>Age</label>
          <input type="number" ref={AgeInputRef} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" ref={PasswordInputRef}></input>
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
                EmailInputRef.current.value === "" ||
                AgeInputRef.current.value === "" ||
                PasswordInputRef.current.value === ""
              ) {
                alert("Please fill all the fields");
              } else {
                onCreateAccount();
              }
            }}
          >
            Sign in
          </button>
        </div>
        <label
          ref={MsgLabelRef}
          style={{
            width: "90%",
            padding: "10px",
            color: "Green",
            marginTop: "20px",
          }}
        ></label>
      </form>
    </div>
  );
}

export default Signin;
