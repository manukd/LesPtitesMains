var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/lesptitesmains', {useNewUrlParser: true});
/* GET home page. */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var user = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  age: Number,
  address: String,
  gender: String,
  power: String,
  saved_lives: Number,
  arrested_baddies: Number
});

var User = mongoose.model('Users', user);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var an_user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    address: req.body.address,
    gender: req.body.gender,
    saved_lives: req.body.saved_lives,
    arrested_baddies: req.body.arrested_baddies
  });
  an_user.save(function (err, an_user) {
    if (err) return console.error(err);
    console.log("ici");
    console.log(an_user);
  })
  res.send("recieved your request!");
});

module.exports = router;
