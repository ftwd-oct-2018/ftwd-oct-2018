
const mongoose     = require('mongoose');


mongoose
  .connect('mongodb://localhost/exampleApp', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });




  const Cat = require('../models/Cat');


  const catArray = [
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"},
      {name: "lkwejfnv", age: 1, color: "welfh"}
  ]


  Cat.create(catArray)
  .then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  })
