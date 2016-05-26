var express = require("express");
var http = require("http");
var app = express();
var converter = require("./converter");

var PORT = 3000;

app.get("/healthCheck", function(req, res) {
  var ts = new Date();
  res.send(ts + ": All systems green!");
});

app.get("/rgbToHex", function(req, res) {
  var red = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

var server = http.createServer(app).listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
