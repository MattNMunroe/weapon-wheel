import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./Search";
import './WeaponIndex.css'

const WeaponIndex = (props) => {
  const loggedInUser = localStorage.getItem("username")
  const [weapons, setWeapons] = useState([]);
  const [favorite, setFavorite] = useState(false)

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
  }, [loggedInUser]);
  console.log(weapons);

  const handleCheckboxChange = () => {
    setFavorite(!favorite);
  };

  const handleSearch = (search) => {
    //take what was typed (input)
    //go through weapons list for match
    //filter by weapon.name
    const filteredWeapons = weapons.filter((weapon, index) => {
      return weapon.name.toLowerCase() === search.toLowerCase();
    });
    setWeapons(filteredWeapons);
  };

  return (
    <div className="weapons-list">
      <SearchBar weapons={weapons} handleSearch={handleSearch} />
      <h1>The Armoury</h1>
      <h3>User: {props.loggedIn}</h3>
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
            <label htmlFor="favorite">Favorite?</label>
            <input
          id="favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={favorite}
        />
          </div>
        );
      })}
      <br></br>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default WeaponIndex;
