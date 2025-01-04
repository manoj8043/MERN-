import React from "react";
import "./App.css";
import Signup from "./components/signup";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Homepage" element={<Homepage></Homepage>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/help" element={<Help></Help>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
