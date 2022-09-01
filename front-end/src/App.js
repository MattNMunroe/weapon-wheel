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
import SignUp from "./Components/SignUp";
import UserLogin from "./Components/UserLogin"

function App() {
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
          <Route path='/user/new' element={<SignUp/>}/>
          <Route path='/user/login' element={<UserLogin/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
