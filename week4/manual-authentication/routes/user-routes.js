const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;



router.get('/signup', (req, res, next) => {
  res.render('signup');
});


router.post('/signup', (req, res, next)=>{
    const theUserName = req.body.theUserName;
    const thePassWord = req.body.thePassWord;

    if (theUserName === "" || thePassWord === "") {
        res.render("signup", {errorMessage: "Indicate a username and a password to sign up"});
        return;
      }


      User.findOne({username: theUserName })
        .then(user => {
                if (user !== null) {
                    res.render("signup", {
                        errorMessage: "Sorry, that username is awesome so obviously it's taken!"
                    });
                    return;
                    }
        


            const salt     = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(thePassWord, salt);


            User.create({username: theUserName, password: hashPass})
            .then(()=>{
                res.redirect('/');
            })
            .catch((err)=>{
                next(err);
    })

    
    });// end .then for User.findOne
});





module.exports = router;
