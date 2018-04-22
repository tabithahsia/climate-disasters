const express = require('express');
const db = require('./database.js');
const path = require('path');

var app = express();
var port = 8080;

app.use(express.static(path.join(__dirname, '..', 'dist/')));


app.listen(port, function(){
  console.log('Listening on port 8080');
})
