const request = require('request');
const statesLatLong = require('./statesLatLong');
// console.log(statesLatLong);
var data = [];


// console.log(statesLatLong['CA']);
request.get("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries.csv", function(error, response, body){
  if(!error && response.statusCode == 200){
    var csv = body;
    csv = csv.split("\n");
    for(var i = 1; i < csv.length; i++){
      csv[i] = csv[i].split(",");
      let state = csv[i][5];
      // console.log('this is the state:', state);
      // console.log('statesLatLong[state]', typeof statesLatLong[state]);
      if(statesLatLong[state] !== undefined){
        data.push({state: csv[i][5], year: Number(csv[i][7]), disaster: csv[i][9], latitude: statesLatLong[state][0], longitude: statesLatLong[state][1]});
      }
    }
    // console.log(data); //checks if data looks the way i want
  }
})

module.exports = {
  data: data
}
