var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
