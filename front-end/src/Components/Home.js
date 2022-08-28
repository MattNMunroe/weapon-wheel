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
      <h3>Create Account</h3> <h3>Login</h3>
      <br></br>
        <Link to='/weapons'>The Armoury</Link>
        <br></br>
    </div>
  );
}

export default Home;
