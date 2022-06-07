const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authentication = require("./middlewares/authentication");
require("./config/dbConfig");
port = 3003;

app.use(cors());
app.use(require("express").json());
//All routes starting with /api verify that they receive a valid token in the header.
app.use("/api", authentication, require("./routes"));
//Routes without /api does not require a token.
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
