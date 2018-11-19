const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');





router.get('/api/hello', (req, res, next)=>{
    const theResponse = {}
    theResponse.message = "blah";
    theResponse.content = 'you have successfully created an api'
    res.json(theResponse);
})


router.get('/api/books', (req, res, next)=>{
    Book.find()
    .then((allTheBooks)=>{

        res.json(allTheBooks)

    
    })
    .catch((err)=>{
        next(err);
    })



})










module.exports = router;
