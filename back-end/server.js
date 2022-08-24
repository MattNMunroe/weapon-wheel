// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT || 3030;

// LISTEN
app.listen(PORT, () => {
  console.log(`Your Quest begins on ${PORT} ⚔️ `);
});
