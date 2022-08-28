import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WeaponIndex from "./Components/WeaponIndex";
import SearchBar from "./Components/Search";
import NewWeapon from "./Components/NewWeapon";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/weapons' element={<WeaponIndex/>}/>
          <Route path='/weapons/new' element={<NewWeapon/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
