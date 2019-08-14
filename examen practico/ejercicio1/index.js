const express = require('express');
const bodyParser = require('body-parser');
const headerParser = require('header-parser');
// initialize our express app
const app = express();
app.use(bodyParser());

const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

var server = app.listen(8081, function () {
});

mongo.connect(url, { useMongoClient: true}, (err, client) => {
    if (err) {
      console.error(err)
      return
    }

    const db = client.db('spotify');
    const collection = db.collection('spotify')

    app.get('/api/spotify/search', function(req, res){
      collection.find().toArray((err, items) => {
          res.send(items)
      });
    });

    app.get('/api/spotify/search/titulo', function(req, res){
      var cancion = req.header('cancion');

      collection.find({titulo: cancion}).toArray((err, items) => {
          res.send(items)
      });
    });
  })

  