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
console.log('Server running at http://localhost:8080/students');
