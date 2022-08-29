import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditWeapon() {
  //mod-locked/password locked
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
    updateWeapon(weapon, id)
  }

  return (
    <div>
        Start Here!
    </div>
  )
}

export default EditWeapon;