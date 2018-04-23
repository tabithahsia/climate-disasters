const express = require('express');
const db = require('./database.js');
const path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'dist/index.html')));

app.get('/getLocations/:disaster/:year', function(req, res){
  console.log('req', req.params);
  let locations = [];
  let data = db.data;
  console.log('this is the data finally loaded! ', data);
  for(var i = 0; i < data.length; i++){
    if((data[i].year === Number(req.params.year)) && (data[i].disaster === req.params.disaster)){
      locations.push([data[i].latitude, data[i].longitude]);
    }
  }
  console.log(locations);

  res.send(locations);
})

app.listen(PORT, function(){
  console.log('Listening on port: ', PORT);
})
