require("dotenv").config();
console.log(process.env.DBPSWD);
module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPSWD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    dialect: "postgres",
  },
};
