import "./App.css";
import List from "./components/List";
import moment from "moment";

function App() {
  let date = moment().format("MMMM Do YYYY, h:mm a");
  return (
    <div>
      <p>{date}</p>
      <h1>User Data </h1>
      <List></List>
      <hr></hr>
      <br></br>
      {/* {students.map((student, index) => {
        return (
          <div key={index} className="student">
            <h2>
              {student.firstName} {student.lastName}
            </h2>
            <hr></hr>
            <div className="profile">
              {" "}
              <img src={student.Profile} alt="student" />
            </div>
            <div className="details">
              <p>Age: {student.age}</p>
              <p>Email: {student.email}</p>
              <p>Batch: {student.batch}</p>
              <p>City: {student.City}</p>
              <p>Gender:{student.Gender}</p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
