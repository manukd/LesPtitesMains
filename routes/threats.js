var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/lesptitesmains', {useNewUrlParser: true});
/* GET users listing. */

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/', function(req, res, next) {
    var sess = req.session
    if (sess.username) {
      db.collection("threats").find({}).toArray(function(err,result) {
        if (err) throw err;
        console.log(result);
        res.render('threats', { threats: result , sess: req.session });
      })
    }
    else {
      res.render('error', {message: "Désolé, cette page est seulement accéssible aux héros"});
    }
});

router.post('/', function(req, res, next) {
    var sess = req.session
    if (sess.username) {
      if (req.body.choiceMode=="1") {
        db.collection("threats").find({time: req.body.requete}).toArray(function(err,result) {
            if (err) throw err;
            console.log(result);
            res.render('threats', { threats: result , sess: req.session });
        })
      }
      else if (req.body.choiceMode=="2") {
        db.collection("threats").find({crime: req.body.requete}).toArray(function(err,result) {
            if (err) throw err;
            console.log(result);
            res.render('threats', { threats: result , sess: req.session });
        })
      }
      else {
        db.collection("threats").find({identity: req.body.requete}).toArray(function(err,result) {
            if (err) throw err;
            console.log(result);
            res.render('threats', { threats: result , sess: req.session });
        })
      }

    }
    else {
        res.render('error', {message: "Désolé, cette page est seulement accéssible aux héros"});
    }
});

module.exports = router;
