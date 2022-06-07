const { Client } = require("pg");

const connectionClient = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPSWD,
  port: process.env.DBPORT,
});
connectionClient.connect(function (err) {
  if (err) throw err;
  console.log("connected to postgre!");
});
module.exports = connectionClient;
