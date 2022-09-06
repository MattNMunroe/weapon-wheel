//userId for here//show a pic and bio and create a list for fav weapons
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
const loggedInUser = localStorage.getItem(`username`);

const UserProfile = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
  });

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/user`)
      .then((response) => {
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id,]);
  console.log(user);
  console.log(props.weapons);

  return (
    <div></div>
  )
};

export default UserProfile;
