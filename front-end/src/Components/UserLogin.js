import { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Login = ({ handleSignin, handleSigninClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${API}/user/login`, { username: username, password: password })
      .then((response) => {
        console.log(response)
        localStorage.setItem("username", response.data.payload.username)
      });
  };
  return (
    <section className="signin">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <br></br>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default Login;
