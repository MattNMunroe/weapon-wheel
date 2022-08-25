const express = require("express");
const weapons = express.Router();
const db = require("../DB/dbConfig")
const {
    getWeapon,
    deleteWeapon,
    createWeapon,
    updateWeapon,
  } = require("../queries/weapons");
  const { checkName, nameFormatter } = require("../Validations/checkWeapons");


//INDEX
weapons.get("/", async (req, res) => {
    const allWeapons = await db.any("SELECT * FROM weapon");
    res.json({ payload: allWeapons });
  });
  
  //SHOW
  weapons.get("/:id", async (req, res) => {
    const { id } = req.params;
    const weapon = await getWeapon(id);
    if (weapon.id) {
      res.json({ success: true, payload: weapon });
    } else {
      res.status(404).json({ success: false, payload: "not found" });
    }
  });
  
  //CREATE
  weapons.post("/", checkName, async (req, res) => {
    try {
      const weapon = await createWeapon(req.body);
      weapon.name = nameFormatter(weapon.name);
      res.json({ success: true, payload: weapon });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, payload: "server cannot process request" });
    }
  });
  
  // UPDATE
  weapons.put("/:id", checkName, async (req, res) => {
    try {
      const weapon = await updateWeapon(req.params.id, req.body);
      res.json({ success: true, payload: weapon });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  //DELETE
  weapons.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedWeapon = await deleteWeapon(id);
    if (deletedWeapon) {
      if (deletedWeapon.id) {
        res.status(200).json({ success: true, payload: deletedWeapon });
      } else {
        res.status(404).json({ success: false, payload: "Weapon not found" });
      }
    } else {
      console.error(deletedWeapon);
      res.status(500).json({ success: false, payload: "server error" });
    }
  });
  
  module.exports = weapons;
  