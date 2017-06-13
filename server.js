var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var http = require('http');

var app = express();

require('dotenv').config({ path: 'variables.env' });

var connection = mongoose.createConnection(process.env.MONGODB_URI || process.env.DATABASE);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/test/', function(req, res) {
  res.send(JSON.stringify({
      test: 'It works.'
    }));
});


var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
