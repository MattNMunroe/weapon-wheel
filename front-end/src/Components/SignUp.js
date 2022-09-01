import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function SignUp() {
  const loggedInUser = localStorage.getItem("username")
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/user`, user)
      .then((res) => {
        navigate(`/`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          name="username"
          onChange={handleTextChange}
          id="username"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleTextChange}
          id="password"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleTextChange}
          id="email"
        />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default SignUp;
