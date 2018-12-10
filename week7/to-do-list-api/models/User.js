const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const userSchema = new Schema({
    username: String,
    password: String
})


const User = mongoose.model('User', userSchema)
// model is called User with capital letter and no S at the end
// therefore, the collection in the db will be called 'Users' with a lowercase l and an s at the end


module.exports = User;