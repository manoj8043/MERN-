import "./App.css";
import Markssheets from "./components/Markssheets";

function App() {
  return (
    <div>
      <div id="Hadding">
        <img
          src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png"
          alt=""
        ></img>
        <h1>Marks Percentage Calculator </h1>
      </div>
      <h2>Enter Your Marks Here</h2>
      <hr></hr>
      <Markssheets></Markssheets>
    </div>
  );
}

export default App;
