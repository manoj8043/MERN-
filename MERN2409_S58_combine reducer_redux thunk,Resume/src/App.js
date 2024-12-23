import "./App.css";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((storeObj) => {
    console.log(storeObj);
    return storeObj;
  });
  let addBatter = () => {
    return () => {
      dispatch({ type: "AddBatter", data: inputRef.current.value });
    };
  };

  return (
    <div>
      <h1>Redux 2</h1>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          dispatch({ type: "AddBatter", data: inputRef.current.value });
        }}
      >
        Add Batter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "AddBowler", data: inputRef.current.value });
        }}
      >
        Add Bowler
      </button>
      <button
        onClick={() => {
          dispatch({ type: "AddAllrounder", data: inputRef.current.value });
        }}
      >
        Add Allrounder
      </button>
      <button
        onClick={() => {
          dispatch(addBatter());
        }}
      >
        Add Batter thru trunk
      </button>

      <hr></hr>
      <h2>Batters:{storeObj.BattersReducer.Batter.join()}</h2>
      <h2>Bowlers:{storeObj.BowlersReducer.Bowler.join()}</h2>
      <h2>Allrounders:{storeObj.AllrounderReducer.Allrounder.join()}</h2>
    </div>
  );
}
export default App;
