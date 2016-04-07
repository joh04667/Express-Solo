var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app =  express();
var port = 3000;
var balance = require('./modules/balance');
var random = require('./modules/random');
var usDollas = require('./modules/usdollas');

app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('got request');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/balance', function(req, res) {
  res.send(balance.randomDollars());
});






app.listen(port, function() {
  console.log('Listening on', port);
});
