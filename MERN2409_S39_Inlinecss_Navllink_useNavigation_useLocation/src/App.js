import "./App.css";
import React, { useRef } from "react";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Dash from "./components/Dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gotopage from "./components/Gotopage";
import Pagenotfound from "./components/Pagenotfound";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Timetables from "./components/Timetables";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/dash" element={<Dash></Dash>}></Route>
        <Route path="/goto" element={<Gotopage></Gotopage>}></Route>
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/notifications"
          element={<Notifications></Notifications>}
        ></Route>
        <Route path="/timetables" element={<Timetables></Timetables>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
