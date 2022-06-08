const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authentication = require("./middlewares/authentication");
port = 3003;

const { sequelize } = require("./models");
app.use(cors());
app.use(require("express").json());
//All routes starting with /api verify that they receive a valid token in the header.
app.use("/api", authentication, require("./routes"));
//Routes without /api does not require a token.
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
