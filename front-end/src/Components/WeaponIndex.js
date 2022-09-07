import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./Search";
import './WeaponIndex.css'
import UserProfile from "./UserProfile";

const WeaponIndex = (props) => {
  const loggedInUser = localStorage.getItem("username")
  const [weapons, setWeapons] = useState([]);
  const [favorites, setFavorites] = useState([])

  
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

  const handleFavorites = (favorite) => {
    const favoritedWeapon = setFavorites([`${weapons.name}`])
    console.log(favoritedWeapon)
      return setFavorites(favoritedWeapon)
  }

  const handleSearch = (search) => {
    const filteredWeapons = weapons.filter((weapon, index) => {
      return weapon.name.toLowerCase() === search.toLowerCase();
    });
    setWeapons(filteredWeapons);
  };

  return (
    <div className="weapons-list">
      <SearchBar weapons={weapons} handleSearch={handleSearch} />
      <UserProfile weapons={weapons}/>
      <h1>⚔️ Weapons Cache ⚔️</h1>
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
            <h4> Submitted by: {loggedInUser}</h4>
            <label htmlFor="favorite">Favorite this Weapon?</label>
            <input 
              type='checkbox'
              id='favorite'
              onChange={handleFavorites}
              value={favorites}
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
