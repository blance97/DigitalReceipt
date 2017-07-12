// Update with your config settings.
var mysql = require('mysql');
import { databaseConfig } from './configDB';
const prodDB = true;
let connect = {};
let name = "";
if (prodDB) {
  connect = databaseConfig.Prod;
  name = "Production Database";
} else {
  connect = databaseConfig.Dev;
  name = "Development Database"
}
var connection = mysql.createConnection({
  ...connect,
  multipleStatements: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to ${name}!`);
});
export default connection;



