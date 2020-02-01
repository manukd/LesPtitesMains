var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
const session = require('express-session');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/lesptitesmains', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/', function(req, res, next) {
    res.render('connexion');
});

router.post('/', function(req, res, next) {
    db.collection("users").find({username: req.body.username, password: req.body.password}).toArray(function(err,result) {
        if (err) throw err;
        if (result.length == 1) {
            var sess = req.session;
            sess.username = req.body.username;
        }

        if (sess != undefined) {
            res.redirect('/')
        } else {
            res.redirect('connexion')
        }
    });
});

module.exports = router;
