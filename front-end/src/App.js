import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WeaponIndex from "./Components/WeaponIndex";
const API = process.env.REACT_APP_API_URL;

function App() {
  const [search, setSearch] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSearch = (search) => {
    axios
      .get(`${API}/weapons`)
      .then((response) => {
        setSearch(response.data.payload);
        setHistory(...history, search);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/weapons' element={<WeaponIndex handleSearch={handleSearch}/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
