import React from "react";
import "./App.css";
import moment from "moment";

function App() {
  let monthsArr = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <h4>Learninh Date And Moment JS</h4>
      <label>Enter Stating Date</label>
      <input
        type="dateTime-Local"
        onChange={(e) => {
          let SelectedDate = new Date(e.target.value);
          console.log(SelectedDate.toDateString());
          console.log(SelectedDate.getFullYear());
          console.log(monthsArr[SelectedDate.getMonth()]);
          console.log(SelectedDate.getDate());
          console.log(daysArr[SelectedDate.getDay()]);
          console.log(SelectedDate.getHours());
          console.log(SelectedDate.getMinutes());
          console.log(SelectedDate.getSeconds());
          console.log(SelectedDate.getMilliseconds());
          let CourseDuration = 120 * 24 * 60 * 60 * 1000;
          let EndDate = SelectedDate.getTime() + CourseDuration;
          let newDate = new Date(EndDate);

          console.log(newDate);
          let TodayDate = moment().format("YYYY-MM-DD");
          console.log(TodayDate);
        }}
      />
    </div>
  );
}

export default App;
