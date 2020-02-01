var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('accueil', {sess: req.session});
});

module.exports = router;
