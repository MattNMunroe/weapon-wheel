const db = require("../db/dbConfig.js");

const getAllWeapons = async () => {
  try {
    const allWeapons = await db.any("SELECT * FROM weapon");
    return allWeapons;
  } catch (error) {
    return error;
  }
};

const getWeapon = async (id) => {
  try {
    const oneWeapon = await db.one("SELECT * FROM weapon WHERE id=$1", id);
    return oneWeapon;
  } catch (error) {
    return error;
  }
};

const deleteWeapon = async (id) => {
  try {
    const oneWeapon = await db.one(
      "DELETE FROM weapon WHERE id=$1 RETURNING *",
      id
    );
    return oneWeapon;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createWeapon = async ({
  name,
  origin,
  is_referenced,
  notable_wielder,
  description,
  image,
}) => {
  try {
    if (!image) {
      image = "https://static.wikia.nocookie.net/roblox/images/6/64/Shattered_Sword.png/revision/latest?cb=20201002180649";
    }
    const newWeapon = await db.one(
      "INSERT INTO weapon (name, origin, is_referenced, notable_wielder, description, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, origin, is_referenced, notable_wielder, description, image]
    );
    return newWeapon;
  } catch (error) {
    return error;
  }
};

const updateWeapon = async (
  id,
  { name, origin, is_referenced, notable_wielder, description, image, ...otherStuff }
) => {
  try {
    const updateWeapon = await db.one(
      "UPDATE weapon SET name=$1, origin=$2, is_referenced=$3, notable_wielder=$4 , description=$5, image=$6 where id=$7 RETURNING *",
      [name, origin, is_referenced, notable_wielder, description, image, id]
    );
    return updateWeapon;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllWeapons,
  getWeapon,
  deleteWeapon,
  createWeapon,
  updateWeapon,
};
