import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditWeapon(props) {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/weapons/${id}`)
      .then((response) => {
        setWeapon(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, navigate]);

  const updateWeapon = (editedWeapon) => {
    axios
      .put(`${API}/weapons/${id}`, editedWeapon)
      .then(() => {
        navigate(`/weapons`);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWeapon(weapon, id);
  };

  return (
    <div className="Edit">
      <div>
        <h5>Edit Weapon</h5>
        <h3>User: {props.loggedIn}</h3>
        <br></br>
        <form onSubmit={handleSubmit} id="edit-form">
          <label htmlFor="name">Weapon Name: </label>
          <br></br>
          <input
            name="name"
            id='name'
            value={`${weapon.name}`}
            type="text"
            onChange={handleTextChange}
            required
          />
          <br></br>
          <label htmlFor="origin">Weapon's Origins: </label>
          <br></br>
          <input
            name="origin"
            id='origin'
            value={`${weapon.origin}`}
            type="text"
            onChange={handleTextChange}
            required
          />
          <br></br>
          <label htmlFor="reference">
            Is this Weapon referenced anywhere else, like a movie, or a book?
          </label>
          <br></br>
          <input
            name="reference"
            value={`${weapon.is_referenced}`}
            type="checkbox"
            onChange={handleCheckbox}
          />
          <br></br>
          <label htmlFor="wielder">
            Does this Weapon have a known wielder?
          </label>
          <br></br>
          <input
            name="notable-wielder"
            value={`${weapon.notable_wielder}`}
            type="checkbox"
            onChange={handleCheckbox}
          />
          <br></br>
          <label htmlFor="description">Description: </label>
          <br></br>
          <input
            id='description'
            type="text"
            name='description'
            value={`${weapon.description}`}
            onChange={handleTextChange}
            required
          />
          <br></br>
          <label htmlFor="image">Image: </label>
          <br></br>
          <input
            id="image"
            type="text"
            name="weapon-picture"
            value={`${weapon.image}`}
            onChange={handleTextChange}
          />
          <br></br>
          <input type="submit" />
        </form>
        <Link to={`/weapons/${id}`}>
          <button className="back">{`Back to ${weapon.name}`}</button>
        </Link>
      </div>
    </div>
  );
}

export default EditWeapon;
