var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/lesptitesmains', {useNewUrlParser: true});
/* GET home page. */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/', function(req, res, next) {
  res.render('connect', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  db.collection("users").find({username: req.body.username, password: req.body.password}).toArray(function(err,result) {
    if (err) throw err;
    console.log("connect");
    console.log(result);
  })
  // res.render('searchHero', { hero: heros});
  res.send('respond with a resource');
});

module.exports = router;
