var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('inscription', { title: 'Express' });
});

module.exports = router;
