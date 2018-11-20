const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcryptjs');
const passport = require('passport');


const User    = require('../models/User');

const uploader = require('../config/cloudinary-stuff');







router.get('/register', (req, res, next)=>{
    res.render('signup-page');
})


router.post('/signup', uploader.single('the-picture') ,(req, res, next)=>{
    // the cloudinary middleware package creates something called req.file



    const salt = bcrypt.genSaltSync(10);
    const theHash = bcrypt.hashSync(req.body.password, salt);
    // bcrypt scrambles the password
    // the process is extremely complex, but all we need to remember is create a salt
    // then use the salt to hash the password and save the scrambled version and dont save the original
    
    User.create({
        username: req.body.username,
        password: theHash,
        bio: req.body.bio,
        profilePic: req.file.url
        // req.file.url is the location on cloudinary.com where the npm package saves your image file
        // since this is the direct address to the image, we can do <img src=thisThing and it will show our image
    })
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>{
        next(err);
    })
})




router.get('/login', (req, res, next)=>{
    res.render('login-page');
})


router.post("/login", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
    // when this route happens, and you log in with passport
    // express basically does ` const req.user = the user who just logged in` and then you have access to it everywhere
  }));


  router.get('/logout', (req, res, next)=>{
      req.logout();
      res.redirect('/');
  })


  router.get('/profile', (req, res, next)=>{
      res.render('profile');
      // req.user is magic 
      // if you use passport, once you login, req.user is a variable that you can use in any route
      // and it is equal to the entire user object (meaning the username, password, bio, all of it)
  })








module.exports = router;