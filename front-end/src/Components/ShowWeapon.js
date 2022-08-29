import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowWeapon = () => {
  const [weapon, setWeapon] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/weapons/${id}`).then((response) => {
      setWeapon(response.data.payload);
    });
  }, [id, navigate, API]);

  const deleteWeapon = () => {
    axios.delete(`${API}/weapons/${id}`)
    .then(() => {
        navigate(`/weapons`)
    })
    .catch((c) => console.error("catch", c))
  }

  const handleDelete = () => {
    //stretch: user oriented delete OR implementing mod features to ensure only I ore trusted officals can delete
    deleteWeapon();
  }

  const { name, origin, is_referenced, notable_wielder, description, image } = weapon

//blade image id like oriented to the right, and be larger. the bio on the left, in a column. Editing the weapon should be mod locked as well.

return (
    <div>
        <h5>{name}</h5>
        <h4>
            {description}
        </h4>
        <article>
            <div>
                <h3>{origin}</h3>
                <h3>{is_referenced}</h3>
                <h3>{notable_wielder}</h3>
                <br></br>
                <img src={image} alt={name}/>
            </div>
        </article>
        <br></br>
        <button href='/weapons'>
            <Link to={"/weapons"}>Back</Link>
        </button>
        <br></br>
        <button>
            <Link to={`/weapons/${id}/edit`}>Edit Weapon</Link>
        </button>
        <br></br>
        <button id={weapon.id} onClick={handleDelete}>
            Delete Entry
        </button>
    </div>
)
};

export default ShowWeapon;
