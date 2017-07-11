import db from './db';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var companies = require('./routes/companies');
var auth = require('./routes/auth');
var item = require('./routes/item');
var receipt = require('./routes/receipt');
var inventory = require('./routes/inventory');
var customers = require('./routes/customers');
var app = express();

app.use(bodyParser.json());

app.use('/api/customers', customers);
app.use('/api/companies', companies);
app.use('/api/auth', auth);
app.use('/api/item', item);
app.use('/api/receipt', receipt);
app.use('/api/inventory', inventory);


var port = 8080;

app.listen(port, '0.0.0.0', function (error) {
  if (error) throw error;
  db.query("INSERT IGNORE INTO customer (id, fname,lname,email) VALUES(-1,'','','No Info Provided');");
  console.log('Express server listening on port', port);
});
