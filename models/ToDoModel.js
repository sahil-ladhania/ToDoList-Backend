// The "models" folder is typically used to store files that define the structure and behavior of the application's data models.

// Requiring Mongoose from Server.js file.
const mongoose = require('mongoose');

// Defining Schema for our Database.
const toDoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

// Compiling Models for user.
module.exports = mongoose.model('ToDo', toDoSchema);

// Both the lines of code defines a mongoose model for a (ToDo) object. But the only difference lies in how the model is exported and assigned to a variable.

// 1. const toDo = mongoose.model('ToDo', toDoSchema); ------> In this the model is being assigned to a variable directly. And it can only be used in a single file. Cant be exported to a different file.

// 2. module.exports = mongoose.model('ToDo', todoSchema); ------> In this the model is being exported as a module, so that it can be used in other files by requiring it.
