import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WeaponIndex = (props) => {
  const [weapons, setWeapons] = useState([]);

  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  const submitAndReset = () => {
    props.handleSearch(input);
    setInput("");
  };

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/weapons`)
      .then((response) => {
        setWeapons(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(weapons);

  return (
    <div className="weapons-list">
      <h1>The Armoury</h1>
      {weapons.map((weapon, index) => {
        return (
          <div key={index}>
            <h1>{weapon.name}</h1>
            <img src={weapon.image} alt="weapon" />
            <br></br>
            <h2>{weapon.origin}</h2>
            <h3> Reference: {weapon.is_referenced ? "Yes" : "No"}</h3>
            <h3> Notable Wielder: {weapon.notable_wielder ? "Yes" : "No"}</h3>
            <h2> Description: {weapon.description}</h2>
          </div>
        );
      })}
      <br></br>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default WeaponIndex;
