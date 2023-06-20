// In the context of backend development, a controller folder typically contains modules or files that handle the business logic or application logic of an application. The controller layer acts as an interface between the HTTP requests received by the server and the underlying data model or services.

// Require ToDoModel.js from Model folder.
const ToDoModel = require("../models/ToDoModel");

// Logic for Getting the Data.
function getToDo(req, res){
    ToDoModel
    .find() // Method to find.
    .then(todo => res.send(todo))
    .catch(error => {
        console.log(error);
        res.status(500).send('Server Error !!!');
    });
}

// Logic for Saving the Data.
function saveToDo(req, res){
    const {text} = req.body;
    ToDoModel
    .create({text}) 
    .then((data) => {
        console.log("Added Successfully ...");
        console.log(data);
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send("Server Error !!!");
    });
}

// Logic for Updating the Data.
function updateToDo(req, res){
    const {_id, text} = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => {
        res.set(201).send("Updated Successfully ...");
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send("Server Error !!!");
    });
}

// Logic for Deleting the Data.
function deleteToDo(req, res){
    const { _id } = req.body;
    console.log(`id ----> ${_id}`);
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => {
        res.set(201).send("Deleted Successfully ...")
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send("Server Error !!!");
    });
}

// Exporting getToDo, saveToDo, deleteToDo, updateToDo.
module.exports = {
    getToDo,
    saveToDo,
    updateToDo,
    deleteToDo
}







