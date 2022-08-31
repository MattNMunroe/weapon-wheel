import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WeaponIndex from "./Components/WeaponIndex";
import SearchBar from "./Components/Search";
import NewWeapon from "./Components/NewWeapon";
import ShowWeapon from "./Components/ShowWeapon";
import EditWeapon from "./Components/EditWeapon";

function App() {
//establish a feed component
//user information for db (refer to Antonio's thing)
//PsuedoProfilePage
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/weapons' element={<WeaponIndex/>}/>
          <Route path='/weapons/:id' element={<ShowWeapon/>}/>
          <Route path='/weapons/new' element={<NewWeapon/>}/>
          <Route path='/weapons/:id/edit' element={<EditWeapon/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
