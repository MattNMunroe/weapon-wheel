const db = require("../DB/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

const getUserInformation = async (username) => {
  try {
    const loggedUser = await db.one("SELECT * FROM users WHERE username=$1", username)
    return loggedUser;
  } catch (error) {
    console.log(error.message || error);
    return null
  }
}

const deleteUser = async (id) => {
  try {
    const oneUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return oneUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createUser = async ({
  username,
  password,
  email,
}) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (username, password, email) VALUES($1, $2, $3) RETURNING *",
      [username, password, email ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (
  id,
  { username, password, email, ...otherStuff }
) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET username=$1, password=$2, email=$3, where id=$4 RETURNING *",
      [username, password, email, id]
    );
    return updateUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
  getUserInformation,
};
