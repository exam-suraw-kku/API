/*  วิธีแรกพิมพ์ออก Console log

var express = require('express');
var app = express();
var fs = require("fs");
app.get('/students', (req, res) => {
  fs.readFile('students.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});
});
app.listen(8080);
console.log('Server running at http://localhost:8080/students');*/
// วิธีที่ 2 ใช้ Post man เทสได้
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/students', function (req, res) { //เซต get methord
   fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

