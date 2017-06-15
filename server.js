var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var http = require('http');
var axios = require('axios');

var app = express();

require('dotenv').config({ path: 'variables.env' });

var connection = mongoose.createConnection(process.env.MONGODB_URI || process.env.DATABASE);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/api/imagesearch/:searchstring', function(req, res) {
  axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_CX,
        searchType: 'image',
        q: req.params.searchstring,
        //Pagination. If user has offset = 2, want to start at 11, offset = 3, start at 21, etc. Default start at 1.
        start: 10*(req.query.offset-1)+1 || 1
      }
    })
    .then(function (response) {
      var toReturn = [];
      response.data.items.map(function(item) {
        toReturn.push({
          url: item.link,
          snippet: item.snippet,
          thumbnail: item.image.thumbnailLink,
          context: item.image.contextLink
        })
      });

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(toReturn));
    })
    .catch(function (error) {
      console.log(error);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        error: 'There was an error processing the request.'
      }));
    });
});


var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
