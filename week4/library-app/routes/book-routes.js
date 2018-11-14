const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');



router.get('/', (req, res, next) => {
    Book.find()
    .then((allTheBooks)=>{
        res.render('books/books', {books: allTheBooks})
    })
    .catch((err)=>{
        next(err);
    })
});


router.get('/new', (req, res, next) => {
    res.render('books/new-book')
  });

router.post('/create', (req, res, next)=>{
// instead of doing title: req.body.title and decription: req.body.description
// we just take the entire req.body and make a book out of it
    Book.create(req.body)
    .then(()=>{
        res.redirect('/books');
    })
    .catch((err)=>{
        next(err)
    })
})


router.get('/:theIdThing/edit', (req, res, next)=>{
    Book.findById(req.params.theIdThing)
    .then((theBook)=>{
        res.render('books/edit', {theBook: theBook})
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/:id/update', (req, res, next)=>{

    //req.body is an object with the exact perfect structure of a book
    // this is a coicidence becase we gave our inputs name= the same keys that our book model has

    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect('/books/'+req.params.id);
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/:id', (req, res, next)=>{
    Book.findById(req.params.id)
    .then((theBook)=>{
        res.render('books/details', theBook)
        // here we pass in theBook which is an object, and has keys like
        // title description and author
        //therefore the variables we will have available in this view are
        // title, description, author, etc. we will not have a variable called theBook b/c it is not a key inside theBook (bc that wouldnt make sense)
    })
    .catch((err)=>{
        next(err);
    })
})


router.post('/:id/delete', (req, res, next)=>{
    Book.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/books')
    })
    .catch((err)=>{
        next(err);
    })
})



module.exports = router;
