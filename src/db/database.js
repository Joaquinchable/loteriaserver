const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "lote",
  password: "12345",
  database: "loteria",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: "3306",
});

module.exports = connection;
