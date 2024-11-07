import "./App.css";
import React, { useRef } from "react";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Dash from "./components/Dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gotopage from "./components/Gotopage";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/dash" element={<Dash></Dash>}></Route>
        <Route path="/goto" element={<Gotopage></Gotopage>}></Route>
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
