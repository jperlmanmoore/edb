const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b2ec77dbeebfd3",
  password: "535f5494",
  database: "heroku_3b2e5fa92fe156f"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
