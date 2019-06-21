const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   port: 3310,
//   user: "b2ec77dbeebfd3",
//   password: "535f5494",
//   database: "heroku_3b2e5fa92fe156f", 
//   reconnect: true
// });
// ideally I would use the separate file for keeping this secret

const connection = mysql.createConnection({
  host: "localhost",
  port: 3310,
  user: "root",
  password: "docker",
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
