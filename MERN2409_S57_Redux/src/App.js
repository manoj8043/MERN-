import React, { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let dispatch = useDispatch();
  let storeobj = useSelector((store) => {
    return store;
  });
  let NameInputRef = useRef();
  return (
    <div>
      <div>
        <h1>Cricket Team Entry</h1>
      </div>
      <div>
        <form>
          <label>Name</label>
          <input type="Text" ref={NameInputRef}></input>
          <br></br>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "addBatter", data: NameInputRef.current.value });
            }}
          >
            Batter
          </button>
          <br></br>
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "addBowler",
                data: NameInputRef.current.value,
              })
            }
          >
            Bowler
          </button>
          <br></br>
          <button
            type="button"
            onClick={() => {
              dispatch({
                type: "addAllrounder",
                data: NameInputRef.current.value,
              });
            }}
          >
            Allrounder
          </button>
        </form>
      </div>
      <hr></hr>
      <div>
        <h4>Batters :{storeobj.Batter.join()}</h4>
        <p>Total Batters= {storeobj.Batter.length}</p>
        <hr></hr>
        <h4>Bowlers :{storeobj.Bowler.join()}</h4>
        <p>Total Bowlers= {storeobj.Bowler.length}</p>
        <hr></hr>
        <h4>Allrounders :{storeobj.Allrounder.join()}</h4>
        <p>Total Allrounders= {storeobj.Allrounder.length}</p>
        <h3>
          Total Players=
          {storeobj.Batter.length +
            storeobj.Bowler.length +
            storeobj.Allrounder.length}
        </h3>
      </div>
      <h3></h3>
    </div>
  );
}

export default App;
