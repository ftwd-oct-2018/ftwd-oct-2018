const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');


/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((stuffIGetBackFromDB)=>{
        res.render('movie-list', {movies: stuffIGetBackFromDB});
    })
    .catch((err)=>{
        next(err);
    })
});



router.get('/movies/:theID', (req, res, next)=>{
    Movie.findById(req.params.theID)
    .then((theThingIGetBackFromDB)=>{
        res.render('movie-details', {theMovie: theThingIGetBackFromDB})
    })
    .catch((err)=>{
        next(err);
    })
})

module.exports = router;
