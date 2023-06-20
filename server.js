// Require all the dependencies required in the project.

// Express
const express = require('express');

// Mongoose
const mongoose = require('mongoose');

// We can require dotenv in three ways :-

// 1.  const dotenv = require('dotenv'); ------> This is a wrong method as by using this method we are assigning dotenv module to a variable which will allow us to access the method and properties of the dotenv module. However, it doesn't load the environment variables from the .env file.

// 2.  require("dotenv").config(); -------> This is the best and convinient way to require dotenv as this is using .config(). This line loads the dotenv module and immediately executes its config() method. This method reads the .env file in the root directory of the project and loads the environment variables defined in it into the process environment.

// 3.  const dotenv = require('dotenv');
//     dotenv.config(); --------> This is also correct and does the same thing but it just take one line extra to do this job.
require("dotenv").config();

// Routes
const routes = require('./routes/ToDoRoute');

// Cors(Middleware)
const cors = require('cors');

// Defining Variable for express().
const app = express();

// Defining the Default Port where we will listen.
const PORT = process.env.PORT || 80;

// Adding Middleware Function for our ToDoList App.
app.use(express.json());
app.use(cors()); // Why we are using this in our app?

// Mongoose Connection.
mongoose
    .connect(process.env.MONGODB_URL, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true
    }).then(() => {
        console.log("You are connected to MonogDB Database...");
    }).catch((error) => {
        console.log("Error connecting to MongoDB Database", error);
});

// Adding Middleware Function for Routes.
app.use(routes);

// Finally Listening on Port.
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
});