import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

function Home (props) {
  return (
    <div>
      <h1>Welcome to Weapon Wheel!</h1>
      <br></br>
      <h4>Returning users, please Login!</h4>
      <br></br>
      <Link to='/user/new'><h3>Create Account</h3></Link> <Link to='/user/login'><h3>Login</h3></Link>
      <br></br>
        <Link to='/weapons'>The Armoury</Link>
        <br></br>
    </div>
  );
}

export default Home;
