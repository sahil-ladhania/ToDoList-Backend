// Require all the dependencies required in the project.
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute');

require("dotenv").config();

const app = express();
const PORT = 81;

// Cors(Middleware)
const cors = require('cors');

// Adding Middleware Function for our ToDoList App.
app.use(express.json());
app.use(cors());

// Mongoose Connection.
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("You are connected to MongoDB Database...");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB Database", error);
});

// Adding Middleware Function for Routes.
app.use(routes);

// Finally Listening on Port.
app.listen(PORT,() => {
    console.log(`Server is listening on Port ${PORT}`);
});