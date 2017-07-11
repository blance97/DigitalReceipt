// Update with your config settings.


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Change!23",
  database: "DigitalReceipt",
  multipleStatements: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
export default connection;


