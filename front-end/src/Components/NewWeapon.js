import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewWeapon() {
  const navigate = useNavigate();
  const [weapon, setWeapon] = useState({
    name: "",
    origin: "",
    is_referenced: false,
    notable_wielder: false,
    description: "",
    image: "",
  });

  const handleTextChange = (event) => {
    setWeapon({ ...weapon, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setWeapon({
      ...weapon,
      is_referenced: !weapon.is_referenced,
      notable_wielder: !weapon.notable_wielder,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/weapons`, weapon)
      .then((res) => {
        navigate(`/weapons`);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className="form">
      <div>
        <h4>Enter a New Weapon</h4>
        <h3>New entries will be vetted by Moderators.</h3>
        <h3>Please include any references and notable wielders in your description, should there be any.</h3>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Weapon Name:</label>
        <input
          type="text"
          name="weapon-name"
          onChange={handleTextChange}
          id="name"
        />
        <label htmlFor="origin">Weapon's Origins:</label>
        <input
          type="text"
          name="origin"
          onChange={handleTextChange}
          id="origin"
        />
        <label htmlFor="reference">
          Is this Weapon referenced anywhere else, like a movie, or a book?
        </label>
        <input
          type="checkbox"
          name="referenced"
          onClick={handleCheckbox}
          id="reference"
        />
        <label htmlFor="wielder">Does this Weapon have a known wielder?</label>
        <input
          type="checkbox"
          name="wielder"
          onClick={handleCheckbox}
          id="notable-wielder"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="descriptor"
          onChange={handleTextChange}
          id="description"
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          alt="weapon"
          name="image"
          onChange={handleTextChange}
          id="image"
          placeholder="Place Image Link Here..."
        />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default NewWeapon;
