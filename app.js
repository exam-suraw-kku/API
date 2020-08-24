const express = require('express');
const app = express();
var fs = require("fs");
app.get('/students', (req, res) => {
  fs.readFile(__dirname + "/" + "studnts.json", 'utf8', function(err, data)
  consloe.log(data);
  res.end(data);
});

app.listen(8080, () => {
 var host =server.address().address
 var port =server.address().port
  console.log('Start server at port http://%s:%s",host,port)
 
  }
});
