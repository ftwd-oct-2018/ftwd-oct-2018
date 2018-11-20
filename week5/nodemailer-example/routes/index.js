const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/contact', (req, res ,next)=>{
  res.render('contact-page');
})


router.post('/contact', (req, res, next)=>{

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.email_for_app,
      pass: process.env.password_for_email 
    }
  });

  transporter.sendMail({
    from: 'My Awesome Project 👻 <superOfficialEmailAccount@officialApp.com>',
    to: 'adjudicatearbitrate@gmail.com', 
    subject: 'Super Official Business Related Email ', 
    text: 'Awesome Message',
    html: `
    <h1>This is an autamted message from your web application</h1>
    <div> You are receiving this message from ${req.body.name}</div>
    <div> return email: ${req.body.returnEmail}</div>
    <h6> Message is as follows: </h6>
    <p>${req.body.content}</p>
    `
  })
  .then((info) => {
    console.log(info);
    res.redirect('/');
  })
  .catch(error => console.log(error))


})



module.exports = router;
