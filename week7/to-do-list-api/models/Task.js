const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const taskSchema = new Schema({
    title: String,
    description: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
})


const Task = mongoose.model('Task', taskSchema)
// model is called Task with capital letter and no S at the end
// therefore, the collection in the db will be called 'tasks' with a lowercase l and an s at the end


module.exports = Task;