const express = require('express');
const router  = express.Router();
const Author  = require('../models/Author');




router.get('/authors', (req, res, next)=>{
    Author.find()
    .then((authors)=>{
        res.render('author-views/author-index', {authors})
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/authors/new', (req, res, next)=>{
    res.render('author-views/add-new-author')
})

router.post('/authors/create', (req, res, next)=>{
    Author.create(req.body)
    .then(()=>{
        res.redirect('/authors');
    })
    .catch((err)=>{
        next(err);
    })
})






module.exports = router;
