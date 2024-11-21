import React from "react";
import "./App.css";
import Cat from "./classes/Cat";
import Kitten from "./classes/Kitten";

function App() {
  let meow = new Cat();
  meow.eatingBehaviour();
  meow.sleepingBehaviour();
  meow.facinghumanBehaviour();

  let kite = new Kitten();
  kite.eatingBehaviour();
  kite.sleepingBehaviour();

  return (
    <div>
      <h3>Parent Class</h3>
      <h6>👉{meow.eatingBehaviour}</h6>
      <h6>👉{meow.sleepingBehaviour}</h6>
      <h6>👉{meow.facinghumanBehaviour}</h6>
      <br />
      <h3>Child Class</h3>
      <h6>👉{kite.eatingBehaviour}</h6>
      <h6>👉{kite.sleepingBehaviour}</h6>
    </div>
  );
}

export default App;
