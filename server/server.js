const express = require('express');
const db = require('./database.js');
const path = require('path');

var app = express();
var port = 8080;

app.use(express.static(path.join(__dirname, '..', 'dist/')));

app.get('/', function(req, res){
  // data = db.data;
})


app.get('/getLocations/:disaster/:year', function(req, res){
  console.log('req', req.params);
  let locations = [];
  let data = db.data;
  // console.log('this is the data finally loaded! ', Array.isArray(data));
  for(var i = 0; i < data.length; i++){
    if((data[i].year === Number(req.params.year)) && (data[i].disaster === req.params.disaster)){
      locations.push([data[i].latitude, data[i].longitude]);
    }
  }
  console.log(locations);

  res.send(locations);
})

app.listen(port, function(){
  console.log('Listening on port 8080');
})
