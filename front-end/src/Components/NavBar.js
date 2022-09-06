import { Link } from "react-router-dom";
import React from "react";
import './NavBar.css'

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
    </nav>
  );
};

export default Nav;
