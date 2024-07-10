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


router.post('/create', async function(req, res, next) {
  // const {} = await bookModels.create(req.body)
try {
  const book = await new bookModels(req.body)
  book.name = "book ka name"
  await book.save()
  console.log(book)
  
}catch{(err)=>{
  console.log(err)

 }}
})



module.exports = router;
