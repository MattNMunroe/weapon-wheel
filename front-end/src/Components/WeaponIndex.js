import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./Search";

const WeaponIndex = (props) => {
  const loggedInUser = localStorage.getItem("username")
  const [weapons, setWeapons] = useState([]);
  const { id } = useParams();

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

  const handleSearch = (search) => {
    //take what was typed (input)
    //go through weapons list for match
    //filter by weapon.name
    const filteredWeapons = weapons.filter((weapon, index) => {
      return weapon.name === search;
    });
    setWeapons(filteredWeapons);
  };

  return (
    <div className="weapons-list">
      <SearchBar weapons={weapons} handleSearch={handleSearch} />
      <h1>The Armoury</h1>
      <Link to="/weapons/new">New Weapon</Link>
      {weapons.map((weapon, index) => {
        return (
          <div key={index}>
            <h1>
              <Link className="weapon-link" to={`/weapons/${weapon.id}`}>
                {weapon.name}
              </Link>
            </h1>
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
