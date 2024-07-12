var express = require('express');
var router = express.Router();
const bookModels = require('../module/bookSchema');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home');
});


router.get('/create', function (req, res, next) {
  res.render('create');
});


// router.get('/library', function(req, res, next) {
//   res.render('library');
// });


router.post('/create', async function (req, res, next) {
  // const {} = await bookModels.create(req.body)
  try {
    console.log(req.body);
    const book = new bookModels(req.body)    
    book.name = "book ka name"
    await book.save()
    console.log("book")
    res.redirect('/library')

  } catch {
    (err) => {
      console.log(err)
      res.redirect(err)

    }
  }
})

router.get('/library', async function (req, res, next) {
  const Books = await bookModels.find()
  // console.log(Books);
  res.render("library",{Books})
});


router.get('/details:.bookkiid', async function (req, res, next) {
  
  console.log(req.params);
  const Books = await bookModels.find()
  
  res.render("library",{Books})
});

module.exports = router;
