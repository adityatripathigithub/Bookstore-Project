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


// router.get('/library', function(req, res, next) {
//   res.render('library');
// });


router.post('/create',  function(req, res, next) {
  const book =  bookModel.create(req.body)
  console.log("book")

});

module.exports = router;
