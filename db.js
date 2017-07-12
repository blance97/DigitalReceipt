// Update with your config settings.


var mysql = require('mysql');
//mysql://wmvp5fn20iwq6ews:at0m8emo33f1feam@erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k03xx72ahzfsd3ag
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




