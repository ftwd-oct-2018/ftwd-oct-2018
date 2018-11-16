const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');
const Author  = require('../models/Author');




router.get('/', (req, res, next) => {
    if(!req.user || !req.user.admin){
        req.flash('error', 'page not available');
        res.redirect('/login')
        return;
    } else{

        Book.find().populate('author')
        .then((allTheBooks)=>{
            res.render('book-views/books', {books: allTheBooks})
        })
        .catch((err)=>{
            next(err);
        })
    }
});


router.get('/new', (req, res, next) => {
    if(!req.user) {
        req.flash('error', 'sorry you must be logged in to donate a book')
        res.redirect('/login');
    } else{ 
        Author.find()
        .then((allTheAuthors)=>{
            res.render('book-views/new-book', {allTheAuthors})
        })
        .catch((err)=>{
            next(err);
        })
    }
  });

router.post('/create', (req, res, next)=>{
// instead of doing title: req.body.title and decription: req.body.description
// we just take the entire req.body and make a book out of it
    const newBook = req.body;
    newBook.donor = req.user._id;
    // since req.user is available in every route, its very easy to attach the current users id to any new thing youre creating or editing
    Book.create(newBook)
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

        Author.find()
        .then((allTheAuthors)=>{

           allTheAuthors.forEach((author)=>{
                if(author._id.equals(theBook.author)){
                    author.yes = true;
                }
            })
         
           console.log(allTheAuthors)
       
            res.render('book-views/edit', {theBook: theBook, allTheAuthors: allTheAuthors})
        
        
        })
        .catch((err)=>{
            next(err);
        })
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
    Book.findById(req.params.id).populate('author').populate('donor')
    .then((theBook)=>{
        res.render('book-views/details', theBook)
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
