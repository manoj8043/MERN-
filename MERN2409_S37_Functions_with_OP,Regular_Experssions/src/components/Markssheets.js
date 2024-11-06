import React, { useRef } from "react";

function Markssheets() {
  const FirstNameInputRef = useRef();
  const MiddleNameInputRef = useRef();
  const LastNameInputRef = useRef();
  const EmailInputRef = useRef();
  const MobileInputRef = useRef();
  const AlternateMobileInputRef = useRef();
  const FatherNameInputRef = useRef();
  const MotherNameInputRef = useRef();
  const DateOfBirthInputRef = useRef();

  const NationslityInputRef = useRef();
  const StateInputRef = useRef();
  const DistInputRef = useRef();
  const MandalInputRef = useRef();
  const VillInputRef = useRef();
  const OthersInputRef = useRef();
  const CaptchaInputRef = useRef();

  const regexPatterns = {
    firstName: /^[A-Za-z]{2,16}$/,
    middleName: /^[a-zA-Z]+$/,
    lastName: /^[a-zA-Z]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^[6-9]\d{9}$/,
    alternateMobile: /^[6-9]\d{9}$/,
    fatherName: /^[a-zA-Z]+$/,
    motherName: /^[a-zA-Z]+$/,
    dateOfBirth: /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    address: /^[a-zA-Z0-9\s,.-]+$/,
    nationality: /^[a-zA-Z]+$/,
    state: /^[a-zA-Z]+$/,
    district: /^[a-zA-Z]+$/,
    mandal: /^[a-zA-Z]+$/,
    village: /^[a-zA-Z]+$/,
    others: /^[a-zA-Z]+$/,
  };

  const validateInput = (inputRef, regex) => {
    const result = regex.test(inputRef.current.value);
    inputRef.current.style.backgroundColor = result
      ? "lightgreen"
      : "lightcoral";
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <div className="name">
            <label htmlFor="fname">First Name:</label>
            <input
              ref={FirstNameInputRef}
              type="text"
              onChange={() =>
                validateInput(FirstNameInputRef, regexPatterns.firstName)
              }
            />
          </div>
          <div className="name">
            <label htmlFor="mname">Middle Name:</label>
            <input
              ref={MiddleNameInputRef}
              type="text"
              onChange={() =>
                validateInput(MiddleNameInputRef, regexPatterns.middleName)
              }
            />
          </div>
          <div className="name">
            <label htmlFor="lname">Last Name:</label>
            <input
              ref={LastNameInputRef}
              type="text"
              onChange={() =>
                validateInput(LastNameInputRef, regexPatterns.lastName)
              }
            />
          </div>
          <div className="parent">
            <label>Father Name:</label>
            <input
              ref={FatherNameInputRef}
              type="text"
              onChange={() =>
                validateInput(FatherNameInputRef, regexPatterns.fatherName)
              }
            />
          </div>
          <div className="parent">
            <label>Mother Name:</label>
            <input
              ref={MotherNameInputRef}
              type="text"
              onChange={() =>
                validateInput(MotherNameInputRef, regexPatterns.motherName)
              }
            />
          </div>
          <div id="dob">
            <label>Date of Birth:</label>
            <input
              ref={DateOfBirthInputRef}
              type="text"
              onChange={() =>
                validateInput(DateOfBirthInputRef, regexPatterns.dateOfBirth)
              }
            />
          </div>
        </fieldset>

        <fieldset id="address">
          <legend>Address</legend>
          <div>
            <label>Nationality:</label>
            <input
              ref={NationslityInputRef}
              type="text"
              onChange={() =>
                validateInput(NationslityInputRef, regexPatterns.nationality)
              }
            />
          </div>
          <div>
            <label>State:</label>
            <input
              ref={StateInputRef}
              type="text"
              onChange={() => validateInput(StateInputRef, regexPatterns.state)}
            />
          </div>
          <div>
            <label>District:</label>
            <input
              ref={DistInputRef}
              type="text"
              onChange={() =>
                validateInput(DistInputRef, regexPatterns.district)
              }
            />
          </div>
          <div>
            <label>City/Mandal:</label>
            <input
              ref={MandalInputRef}
              type="text"
              onChange={() =>
                validateInput(MandalInputRef, regexPatterns.mandal)
              }
            />
          </div>
          <div>
            <label>Town/Village:</label>
            <input
              ref={VillInputRef}
              type="text"
              onChange={() =>
                validateInput(VillInputRef, regexPatterns.village)
              }
            />
          </div>
          <div>
            <label>Others:</label>
            <textarea
              ref={OthersInputRef}
              onChange={() =>
                validateInput(OthersInputRef, regexPatterns.others)
              }
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Contact Details</legend>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            ref={EmailInputRef}
            type="email"
            onChange={() => validateInput(EmailInputRef, regexPatterns.email)}
          />

          <label htmlFor="mobileno">Mobile Number:</label>
          <input
            id="mobileno"
            ref={MobileInputRef}
            type="tel"
            onChange={() => validateInput(MobileInputRef, regexPatterns.mobile)}
          />

          <label htmlFor="altmobileno">Alternate Mobile Number:</label>
          <input
            id="altmobileno"
            ref={AlternateMobileInputRef}
            onChange={() =>
              validateInput(
                AlternateMobileInputRef,
                regexPatterns.alternateMobile
              )
            }
          />
        </fieldset>

        <div id="terms">
          <p>
            By submitting this form, you agree to the
            <strong> terms and conditions</strong> of Aadhaar card enrollment,
            including the use of personal data as per the
            <strong> UIDAI privacy policy</strong>.
          </p>
        </div>

        <div id="buttons">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Markssheets;
