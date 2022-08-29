// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const weaponsControllers = require("./Controllers/weaponsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/weapons", weaponsControllers);

// ROUTES
app.get("/", (req, res) => {
  res.send("Engarde!");
});

app.get("*", (req, res) => {
  res.status(404).send("This route doesn't exist");
});

// EXPORT
module.exports = app;
