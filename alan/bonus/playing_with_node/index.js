'use strict';

var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var name;

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
  res.send("Hello World");
});

app.post('/', function(req, res){
  res.send("Hello " + req.body.name);
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});