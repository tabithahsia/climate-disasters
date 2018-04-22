const request = require('request');
var data = [];


request.get("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries.csv", function(error, response, body){
  if(!error && response.statusCode == 200){
    var csv = body;
    csv = csv.split("\n");
    for(var i = 1; i < csv.length; i++){
      csv[i] = csv[i].split(",");
      data.push({state: csv[i][5], year: Number(csv[i][7]), disaster: csv[i][9]});
    }
  }
})

module.exports = {
  data: data
}