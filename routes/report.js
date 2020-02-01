var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/lesptitesmains', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var threat = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  time: String,
  crime: String,
  identity: String,
});

var Threat = mongoose.model('Threats', threat);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('crime', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var a_threat = new Threat({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    time: req.body.time,
    crime: req.body.crime,
    identity: req.body.identity
  });
  a_threat.save(function (err, an_user) {
    if (err) return console.error(err);
    console.log("ici");
    console.log(a_threat);
  })
  res.render('crime', { title: 'Express' });
});


module.exports = router;
