var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
/* GET users listing. */

router.get('/', function(req, res, next) {
    var sess = req.session
    if (sess.username) {
      res.render('threats', {sess: req.session});
    }
    else {
      res.send("Pas connecté coco")
    }
});

module.exports = router;
