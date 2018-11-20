// routes/auth-routes.js
const express = require("express");
const authRoutes = express.Router();

// User model
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

// require in the passport package
const passport = require("passport");


const nodemailer = require('nodemailer');


const mongoose = require('mongoose');

authRoutes.get("/wwwqqq/blah/secure/registration/allowed/:code", (req, res, next) => {
    const theCode = req.params.code;

    User.findOneAndUpdate({randomCode: theCode}, {confirmed: true})
    .then((theUser)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err)
    })
});


authRoutes.get('/signup', (req, res, next)=>{
    res.render('auth/signup');
})





authRoutes.post("/signup", (req, res, next) => {
    const username = req.body.email;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("auth/signup", { message: "Indicate username and password" });
        return;
    }

    User.findOne({ username })
    .then(user => {
        if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        const randomCode = mongoose.Types.ObjectId();

        User.create({
            username: username,
            password: hashPass,
            confirmed: false,
            randomCode: randomCode
        })
        .then(()=>{

            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: process.env.the_email,
                  pass: process.env.the_password 
                }
              });
        
              transporter.sendMail({
                from: 'Your Friend Joel at SuperApp.com',
                to:  req.body.email,
                subject: 'Account Confirmation', 
                text: 'Awesome Message',
                html: `
                <b>Please Use the link below to complete the registration process</b>    
                <a href="http://localhost:3000/wwwqqq/blah/secure/registration/allowed/${randomCode}"> Confirm Account </a>
                `
              })
              .then(info =>{
                   console.log(info)
                   res.redirect('/confirm');
                })
              .catch(error => console.log(error))
        })
        .catch((err)=>{
            next(err);
        });

    });
   
});







authRoutes.get('/confirm', (req, res, next)=>{
    res.render('auth/confirmation-page');
})


authRoutes.get('/login', (req, res, next)=>{  
    res.render('auth/login', { "message": req.flash("error") })
})


authRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/secret",
    failureFlash: true,
    passReqToCallback: true
  }));

  authRoutes.get('/logout', (req, res, next)=>{
    req.logout();
    res.redirect("/login");
  })






module.exports = authRoutes;