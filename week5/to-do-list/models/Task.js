
const mongoose = require('mongoose');
//we have to require the mongoose package because we literally use the variable on the next line to create a schema
const Schema = mongoose.Schema;

// Schema is a feature of mongoose that allows us to make rules for the DB
// cause otherwise mongodb is chaos
// plus it gives us extra features like default, unique, required, maxlength, minlength


const taskSchema = new Schema({
    title: String,
    content: String,
    doneyet: {type: Boolean, default: false}
},{
    timestamps: true
})

// the schema ^ makes the rules

const Task = mongoose.model('Task', taskSchema);
// ^ this line creates the Model from mongoose, which determines what the collection in the DB is called
// and it also gives us all the magical methods like .find, .findByID, .findByIdAndUpdate, .create

module.exports = Task;
// here we export the Task variable that we just created with all the rules in the schema so that all the other files in the app
// can use this model



//  if you did module.exports = {thing: 'blah', message: 'haha you exported the wrong thing'}, then as far as the rest of the app is concerned, this entire file is literally equal to that random object

// module .exports is totally useless without a require statement on the other end

// module .exports is basically turning the entire file into a variable that you can use in another file
// using a require statement, so in another you run something like 
// `const Task = require('./models/Task) and when you do that, in that file
// const Task will be equal to whatever you equaled module.exports to