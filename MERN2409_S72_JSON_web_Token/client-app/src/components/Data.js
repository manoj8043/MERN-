import React from "react";
import { useRef, useState, useEffect } from "react";

function Data() {
  let GenderSelectRef = useRef();
  let BatchSelectRef = useRef();

  let [students, setStudents] = useState([]);
  let [batches, setBatches] = useState([]);
  let [Gender, setGender] = useState([]);

  let getStudentsListFromServer = async () => {
    let reqOption = {
      method: "GET",
    };

    let UrlQS = `http://localhost:3001/StudentList?batch=${BatchSelectRef.current.value}&Gender=${GenderSelectRef.current.value}`;
    console.log(UrlQS);

    let UrlP = `http://localhost:3001/StudentList/${BatchSelectRef.current.value}/${GenderSelectRef.current.value}?order=asc`;
    console.log(UrlP);

    let JSONData = await fetch(UrlP, reqOption);
    let JSOData = await JSONData.json();
    setStudents(JSOData);
  };

  let getStudentsBatchesFromServer = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch(
      "http://localhost:3001/StudentsBatches",
      reqOption
    );
    let JSOData = await JSONData.json();
    setBatches(JSOData);
  };
  let getStudentsGenderFromServer = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch(
      "http://localhost:3001/StudentsGender",
      reqOption
    );
    let JSOData = await JSONData.json();
    setGender(JSOData);
  };

  useEffect(() => {
    getStudentsBatchesFromServer();
    getStudentsGenderFromServer();
  }, []);
  return (
    <div>
      <div className="Searchdiv">
        <div>
          <form>
            <div>
              <label>Select Batch</label>
              <select ref={BatchSelectRef}>
                {batches.map((ele, i) => {
                  return <option key={i}>{ele}</option>;
                })}
              </select>
            </div>
            <div>
              <label>Select Gender</label>
              <select ref={GenderSelectRef}>
                {Gender.map((ele, i) => {
                  return <option key={i}>{ele}</option>;
                })}
              </select>
            </div>
            <button
              type="button"
              onClick={() => {
                getStudentsListFromServer();
              }}
            >
              Get Employees
            </button>
          </form>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>id</th>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Batch</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {students.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{ele.id}</td>
                  <td>
                    <img src={ele.Profile} alt=""></img>
                  </td>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.age}</td>
                  <td>{ele.Gender}</td>
                  <td>{ele.batch}</td>
                  <td>{ele.City}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

export default Data;
