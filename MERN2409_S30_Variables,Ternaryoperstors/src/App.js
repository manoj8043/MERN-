import "./App.css";
import Markssheets from "./components/Markssheets";

function App() {
  return (
    <div>
      <div id="Hadding">
        <img
          src="https://images.careerindia.com/img/2020/03/tssscexamspostponed-1585579119.jpg"
          alt=""
        ></img>
        <h1>Telangana State Board Secondary Education </h1>
        <h2>S.S.C Public Examinations</h2>
      </div>
      <marquee bgcolor="yellow" Scrollamount="10">
        <p>2024 SSC Public Examinations Results are Out !</p>
      </marquee>
      <h2>2024 Students Marks Results</h2>
      <Markssheets
        name="Hanuman Raj Bangeti"
        rollno="2406100770"
        Engmarks="72"
        Telmarks="92"
        Hinmarks="45"
        Matmarks="65"
        Scimarks="86"
      />
      <Markssheets
        name="Rajesh Kumar"
        rollno="2406100771"
        Engmarks="55"
        Telmarks="67"
        Hinmarks="49"
        Matmarks="73"
        Scimarks="89"
      />
      <Markssheets
        name="Sita Reddy"
        rollno="2406100772"
        Engmarks="80"
        Telmarks="91"
        Hinmarks="88"
        Matmarks="78"
        Scimarks="95"
      />
      <Markssheets
        name="Lakshmi Devi"
        rollno="2406100773"
        Engmarks="68"
        Telmarks="56"
        Hinmarks="40"
        Matmarks="66"
        Scimarks="70"
      />
      <Markssheets
        name="Ram Shankar"
        rollno="2406100774"
        Engmarks="47"
        Telmarks="72"
        Hinmarks="59"
        Matmarks="48"
        Scimarks="67"
      />
      <Markssheets
        name="Priya Varma"
        rollno="2406100775"
        Engmarks="89"
        Telmarks="78"
        Hinmarks="55"
        Matmarks="90"
        Scimarks="92"
      />
      <Markssheets
        name="Venkatesh Naidu"
        rollno="2406100776"
        Engmarks="61"
        Telmarks="66"
        Hinmarks="41"
        Matmarks="62"
        Scimarks="73"
      />
      <Markssheets
        name="Rani Sharma"
        rollno="2406100777"
        Engmarks="76"
        Telmarks="83"
        Hinmarks="58"
        Matmarks="74"
        Scimarks="85"
      />
      <Markssheets
        name="Suresh Patel"
        rollno="2406100778"
        Engmarks="52"
        Telmarks="64"
        Hinmarks="60"
        Matmarks="53"
        Scimarks="68"
      />
      <Markssheets
        name="Amit Singh"
        rollno="2406100779"
        Engmarks="87"
        Telmarks="79"
        Hinmarks="70"
        Matmarks="88"
        Scimarks="90"
      />
    </div>
  );
}

export default App;
