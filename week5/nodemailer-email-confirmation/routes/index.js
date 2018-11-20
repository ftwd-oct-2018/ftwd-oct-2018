const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=',req.user);

  res.render('index', {message: req.flash('error')});
});


router.get('/secret', (req, res, next)=>{
  if(!req.user){
    res.redirect('/login');
    return;
  }

  res.render('secret', {user: req.user})
})

module.exports = router;
