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

authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

authRoutes.post("/signup", (req, res, next) => {
    const username = req.body.username;
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

        User.create({
            username: username,
            password: hashPass
        })
        .then(()=>{
            res.redirect('/');

        })
        .catch((err)=>{
            next(err);
        });

    });
   
});





authRoutes.get('/login', (req, res, next)=>{  
    res.render('auth/login', { "message": req.flash("error") })
})


authRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true,
    passReqToCallback: true
  }));

  authRoutes.get('/logout', (req, res, next)=>{
    req.logout();
    res.redirect("/login");
  })






module.exports = authRoutes;