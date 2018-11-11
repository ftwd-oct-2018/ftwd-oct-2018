const express = require('express');
// ^ this line means: go look in node_module folder and find another folder called express
// in that folder, there will a file that is doing a bunch of magic and then
// exporting a magic variable for you and you are equaling express to that variable
const app = express();
// this line creates a variable called app that is equal to whatever happens
//when we run the file that we got from requiring express on line 1


//  make sure you follow this same folder structure in the future.  App.js must be in
// root directory with package.json


app.use(express.static('public'));




app.get('/', (req, res, next) => {
    res.send(` <h1>Welcome Ironhacker. :)</h1>
    <a href="/about">Go to about Page </a>
    `);
  });
  // when using res.send, you have to write the entire html of the page as a string
  // this is not a viable way to make a web app - can be useful for testing though


  app.get('/about', (req, res, next)=>{
    res.sendFile(__dirname + '/views/home-page.html');
  })

  //sending a separate html file is a more scalable approach





app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });