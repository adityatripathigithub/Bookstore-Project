var express = require('express');
var router = express.Router();
const bookModels = require('../module/bookSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/create', function(req, res, next) {
  res.render('create');
});
router.post('/create', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
