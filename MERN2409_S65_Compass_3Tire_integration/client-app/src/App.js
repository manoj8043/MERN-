import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [students, setStudents] = useState([]);

  let getStudentsListFromServer = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:32232/StudentList", reqOption);
    let JSOData = await JSONData.json();
    setStudents(JSOData);
  };

  useEffect(() => {
    getStudentsListFromServer();
  }, []);
  return (
    <div>
      <h1>User Data </h1>
      <hr></hr>
      <br></br>
      {students.map((student, index) => {
        return (
          <div key={index} className="student">
            <h2>
              {student.firstName} {student.lastName}
            </h2>
            <hr></hr>
            <p>Age: {student.age}</p>
            <p>Email: {student.email}</p>
            <p>Batch: {student.batch}</p>
            <p>City: {student.City}</p>
            <p>Gender:{student.Gender}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
