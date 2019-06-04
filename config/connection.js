const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "bc1c0098725aa7",
  password: "9fc69349",
  database: "heroku_90a15e7d94d803e"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
