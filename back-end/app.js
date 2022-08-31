// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const weaponsControllers = require("./Controllers/weaponsController");
const userControllers = require("./Controllers/userControllers");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/weapons", weaponsControllers);
app.use("/user", userControllers);

// ROUTES
app.get("/", (req, res) => {
  res.send("Engarde!");
});

app.get("*", (req, res) => {
  res.status(404).send("This route doesn't exist");
});

// EXPORT
module.exports = app;
