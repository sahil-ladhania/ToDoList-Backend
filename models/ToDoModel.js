// Requiring Mongoose from Server.js file.
const mongoose = require('mongoose');

// Defining Schema for our Database.
const toDoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Compiling Models for user.
module.exports = mongoose.model('ToDo', toDoSchema);