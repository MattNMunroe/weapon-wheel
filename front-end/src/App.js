import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Render,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import WeaponIndex from "./Components/WeaponIndex";
import SearchBar from "./Components/Search";
import NewWeapon from "./Components/NewWeapon";
import ShowWeapon from "./Components/ShowWeapon";
import EditWeapon from "./Components/EditWeapon";
import SignUp from "./Components/SignUp";
import UserLogin from "./Components/UserLogin";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile"
const API = process.env.REACT_APP_API_URL;
const loggedInUser = localStorage.getItem(`username`);

function App() {
  const [user, setUser] = useState({

  });
  //user information for db (refer to Antonio's thing)
  //PsuedoProfilePage
  //NavBar
  //Search Bar Case Sensitvity
  //CSS
  const [loggedInStatus, setLoggedInStatus] = useState({
    success: true,
    user: loggedInUser
  });
  
  const handleSignOut = async (e) => {
         await axios
        .get(`${API}/user`)
        .then((response) => {
          console.log(response)
      const loggedOut = localStorage.removeItem("username", response.data.payload.username)
          setLoggedInStatus(false, loggedOut)
        });
  
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedInUser} />} />
          <Route path="/weapons" element={<WeaponIndex loggedIn={loggedInUser}/>} />
          <Route path="/weapons/:id" element={<ShowWeapon loggedIn={loggedInUser}/>} />
          <Route path="/weapons/new" element={<NewWeapon loggedIn={loggedInUser}/>} />
          <Route path="/weapons/:id/edit" element={<EditWeapon loggedIn={loggedInUser}/>} />
          <Route path="/user/new" element={<SignUp/>} />
          <Route path="/user/login" element={<UserLogin/>} />
          <Route path="/user/:id" element={<UserProfile loggedIn={loggedInUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
