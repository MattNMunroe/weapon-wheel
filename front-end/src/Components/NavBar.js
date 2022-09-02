import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import SearchBar from "./Search";
import { useState, useEffect} from 'react'
import axios from "axios";
import './NavBar.css'
const API = process.env.REACT_APP_API_URL

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h2>Weapon Wheel!</h2>
      </Link>
      <br></br>
      <Link className="nav-link" to="/user/login">
        <button>Login</button>
      </Link>
      <br></br>
      <Link to='/weapons'><button>The Armoury</button></Link>
      <br></br>
      <Link to='/weapons/new'><button>New Weapon</button></Link>
      <br></br>
      <Link to='/user/:id'><button>View Profile</button></Link>
    </nav>
  );
};

export default Nav;
