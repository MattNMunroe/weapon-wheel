import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import Home from "./Components/Home";
import WeaponIndex from "./Components/WeaponIndex";
import NewWeapon from "./Components/NewWeapon";
import ShowWeapon from "./Components/ShowWeapon";
import EditWeapon from "./Components/EditWeapon";
import SignUp from "./Components/SignUp";
import UserLogin from "./Components/UserLogin";
import NavBar from "./Components/NavBar";
const API = process.env.REACT_APP_API_URL;
const loggedInUser = localStorage.getItem(`username`);

function App() {
  //PsuedoProfilePage
  //CSS
  const handleSignOut = async (e) => {
    await axios.get(`${API}/user`).then((response) => {
      console.log(response);
      const loggedOut = localStorage.removeItem(
        "username",
        response.data.payload.username
      );
      setLoggedInStatus(loggedOut);
    });
  };

  const [loggedInStatus, setLoggedInStatus] = useState([loggedInUser
  ]);

  return (
    <div>
      <Router>
        <NavBar />
      <button onClick={handleSignOut}>Sign Out</button>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedInStatus} />} />
          <Route
            path="/weapons"
            element={<WeaponIndex loggedIn={loggedInStatus} />}
          />
          <Route
            path="/weapons/:id"
            element={<ShowWeapon loggedIn={loggedInStatus} />}
          />
          <Route
            path="/weapons/new"
            element={<NewWeapon loggedIn={loggedInStatus} />}
          />
          <Route
            path="/weapons/:id/edit"
            element={<EditWeapon loggedIn={loggedInStatus} />}
          />
          <Route path="/user/new" element={<SignUp />} />
          <Route path="/user/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
