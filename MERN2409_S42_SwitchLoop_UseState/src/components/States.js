import React, { useRef, useState } from "react";

function States() {
  //   let Score = 0;
  let [score, setScore] = useState(0);
  let [Balls, setBalls] = useState(0);
  let [Wickets, setWickets] = useState(0);
  let [InningsScore, setInningsScore] = useState(0);
  if (Wickets === 10 || Balls === 60) {
    alert("Innings Over");
    setWickets(0);
    setScore(0);
    setBalls(0);
    setInningsScore(score);
  }

  return (
    <div>
      <h1>
        Score:{score}/{Wickets}
      </h1>
      <h1>
        Overs:{parseInt(Balls / 6)}.{Balls % 6}
      </h1>
      <br></br>

      <div className="buttonsdiv">
        <div>
          <h5
            style={{
              backgroundColor: "lightblue",

              padding: "10px",
            }}
          >
            Target : {InningsScore}
          </h5>
        </div>
        <button
          type="button"
          onClick={() => {
            setScore(score + 1);
            setBalls(Balls + 1);
          }}
          style={{ backgroundColor: "lightgreen" }}
        >
          Single
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(score + 2);
            setBalls(Balls + 1);
          }}
          style={{ backgroundColor: "lightblue" }}
        >
          Double
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(score + 3);
            setBalls(Balls + 1);
          }}
          style={{ backgroundColor: "lightcoral" }}
        >
          Triple
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(score + 4);
            setBalls(Balls + 1);
          }}
          style={{ backgroundColor: "lightgoldenrodyellow" }}
        >
          Four
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(score + 6);
            setBalls(Balls + 1);
          }}
          style={{ backgroundColor: "lightsalmon" }}
        >
          Six
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(score + 0);
            setBalls(Balls + 1);
          }}
          style={{ backgroundColor: "lightgray" }}
        >
          Dot
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(score + 0);
            setBalls(Balls + 1);
            setWickets(Wickets + 1);
          }}
          style={{ backgroundColor: "lightpink" }}
        >
          Wicket
        </button>
        <button
          type="button"
          onClick={() => setScore(score + 1)}
          style={{ backgroundColor: "lightseagreen" }}
        >
          No Ball
        </button>
      </div>
    </div>
  );
}

export default States;
