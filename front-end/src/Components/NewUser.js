import { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (event => {
    event.preventDefault()

    const users = []

    await axios.get(`${API}/user`).then((response) => {
        users.push(...response.data)
    })

    let same = false

    users.map((user) => {
        if (user.email === email) {
            same = true
        }
        return same;
    })

    if (same === true) {
        return "Email already exists"
    }

    if (password != confirmPassword) {
        return "Passwords do not match."
    }
  }
}

