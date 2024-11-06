import "./App.css";
import React from "react";
import GoiLogo from "./imgs/uidai.png";
import AadhaarLogo from "./imgs/aadhaar.png";
import Markssheets from "./components/Markssheets";

function App() {
  const calcsummary = (EngMarks, TelMarks, MathMarks) => {
    const totalsummary = EngMarks + TelMarks + MathMarks;
    const percentsummary = ((totalsummary / 300) * 100).toFixed(2) + "%";

    return { totalsummary, percentsummary };
  };

  const totalsummary = calcsummary(40, 50, 60);
  console.log(totalsummary);

  const summary2 = calcsummary(70, 80, 90);
  console.log(summary2);

  const StuDetails = {
    FirstName: "Raju",
    LastName: "Basath",
    Age: 20,
    Email: "Rajubasath12@Gmail.com",
    Phone: 9876543210,
    City: "Bangalore",
    EngMarks: 40,
    TelMarks: 50,
    MathMarks: 60,
    HinMarks: 70,
    SocMarks: 80,
    SciMarks: 40,
  };

  const TeacherDetails = [
    "Priya",
    "Rani",
    21,
    "Priyarani69@gmail.com",
    9876543210,
    "Bangalore",
  ];

  console.log(StuDetails.Phone);
  console.log(StuDetails.FirstName);

  const { FirstName: Fn, LastName: Ln, Age: Ag, Phone: phn } = StuDetails;
  console.log(Fn, Ln, Ag, phn);
  console.log(TeacherDetails);
  console.log(StuDetails);

  const calcResult = (
    EngMarks,
    TelMarks,
    MathMarks,
    HinMarks,
    SocMarks,
    SciMarks,
    PassFn,
    FailFn
  ) => {
    const passmarks = 35;

    if (
      EngMarks >= passmarks &&
      TelMarks >= passmarks &&
      MathMarks >= passmarks &&
      HinMarks >= passmarks &&
      SocMarks >= passmarks &&
      SciMarks >= passmarks
    ) {
      PassFn();
    } else {
      FailFn();
    }
  };

  calcResult(
    40,
    50,
    60,
    70,
    80,
    40,
    () => {
      console.log("Pass");
    },
    () => {
      console.log("Fail");
    }
  );

  return (
    <div>
      <header id="header">
        <div id="goilogo">
          <img src={GoiLogo} alt="GOI Logo" />
        </div>
        <div id="aadhaarlogo">
          <img src={AadhaarLogo} alt="Aadhaar Logo" />
        </div>
      </header>
      <div id="formtitle">
        <h2>Aadhaar Application Form</h2>
      </div>
      <Markssheets />
    </div>
  );
}

export default App;
