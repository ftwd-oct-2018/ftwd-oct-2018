const mongoose = require('mongoose');
// create a new schema object
const Schema   = mongoose.Schema;




//3 then you make the rules about what a cat is

// you only need to do {type: string} if you are adding more rules like a default or minlength
const catSchema = new Schema({
    name : {type: String, minlength: 7},
    color: {type: String, default: "Brown"},
    age  : Number
  });

//3.1 you create the cat class using those rules
const Cat = mongoose.model('Cat', catSchema);


module.exports = Cat;