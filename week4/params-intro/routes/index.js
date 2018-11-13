const express = require('express');
const router  = express.Router();
const Cat     = require('../models/Cat');

/* GET home page */
router.get('/cats', (req, res, next) => {
  Cat.find()
  .then((allTheCats)=>{

    res.render('index', {theList: allTheCats});

  })
  .catch((err)=>{
    next(err);
  })
});





router.get('/cats/new', (req, res, next)=>{
  res.render('new-cat');
});


router.post('/cats/create', (req, res, next)=>{

  Cat.create({
    name: req.body.theCatsName,
    age:   req.body.theAge,
    color: req.body.theColorOfTheCat
     })
     .then(()=>{

      res.redirect('/cats')

     })
     .catch((err)=>{
      next(err);
     })
})




router.get('/cats/:id', (req, res, next)=>{
  Cat.findById(req.params.id)
  .then((theCat)=>{

    res.render('blah', {cat: theCat})

  })
  .catch((err)=>{
    next(err);
  })
})



module.exports = router;
