var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('crime', { title: 'Express' });
});


module.exports = router;