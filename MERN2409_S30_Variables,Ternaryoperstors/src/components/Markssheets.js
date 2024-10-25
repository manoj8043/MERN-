import React from "react";

function Markssheets(props) {
  const maxmarks = Number(100);
  let Engmarks = Number(props.Engmarks);
  let Telmarks = Number(props.Telmarks);
  let Matmarks = Number(props.Matmarks);
  let Scimarks = Number(props.Scimarks);
  let Hinmarks = Number(props.Hinmarks);
  let Totalmarks = Engmarks + Scimarks + Hinmarks + Matmarks + Telmarks;
  let Telpercent = (Telmarks / maxmarks) * 100;
  let Engpercent = (Engmarks / maxmarks) * 100;
  let Matpercent = (Matmarks / maxmarks) * 100;
  let Scipercent = (Scimarks / maxmarks) * 100;
  let Hinpercent = (Hinmarks / maxmarks) * 100;
  let percent = (Totalmarks / (maxmarks * 5)) * 100;
  let Engpass = Engmarks > 35 ? "Pass" : "Fail";
  let Telpass = Telmarks > 35 ? "Pass" : "Fail";
  let Matpass = Matmarks > 35 ? "Pass" : "Fail";
  let Scipass = Scimarks > 35 ? "Pass" : "Fail";
  let Hinpass = Hinmarks > 35 ? "Pass" : "Fail";
  let Overallpass;

  if (
    Engpass === "Pass" &&
    Telpass === "Pass" &&
    Hinpass === "Pass" &&
    Matpass === "Pass" &&
    Scipass === "Pass"
  ) {
    Overallpass = "Pass";
  } else {
    Overallpass = "Fail";
  }

  return (
    <div className="Results">
      <p>{props.name}</p>
      <p>{props.rollno} </p>

      <div>
        <table>
          <tr>
            <th>Subjects</th>
            <th>Max.Marks</th>
            <th>Marks Scored</th>
            <th>Pass/Fail</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <th>Telugu</th>
            <th>{maxmarks}</th>
            <th>{props.Telmarks}</th>
            <th>{Telpass}</th>
            <th>{Telpercent.toFixed(1)}%</th>
          </tr>
          <tr>
            <th>Hindi</th>
            <th>{maxmarks}</th>
            <th>{props.Hinmarks}</th>
            <th>{Hinpass}</th>
            <th>{Hinpercent.toFixed(1)}%</th>
          </tr>
          <tr>
            <th>English</th>
            <th>{maxmarks}</th>
            <th>{props.Engmarks}</th>
            <th>{Engpass}</th>
            <th>{Engpercent.toFixed(1)}%</th>
          </tr>
          <tr>
            <th>Mathematics</th>
            <th>{maxmarks}</th>
            <th>{props.Matmarks}</th>
            <th>{Matpass}</th>
            <th>{Matpercent.toFixed(1)}%</th>
          </tr>
          <tr>
            <th>Science</th>
            <th>{maxmarks}</th>
            <th>{props.Scimarks}</th>
            <th>{Scipass}</th>
            <th>{Scipercent.toFixed(1)}%</th>
          </tr>
          <tr>
            <th>Overall Total</th>
            <th>{maxmarks * 5}</th>
            <th>{Totalmarks}</th>
            <th>{Overallpass}</th>
            <th>{percent.toFixed(1)}%</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Markssheets;
