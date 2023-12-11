// In the context of backend development, a controller folder typically contains modules or files that handle the business logic or application logic of an application. The controller layer acts as an interface between the HTTP requests received by the server and the underlying data model or services.

// Require ToDoModel.js from Model folder.
const ToDoModel = require("../models/ToDoModel");

// Logic for Getting the Data.
function getToDo(req, res){
    ToDoModel
    .find() // Method to find.
        .then((todo) => {
            res.status(200).send(todo);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Server Error !!!', error);
        });
}
// Logic for Adding the Data.
function addToDo(req, res){
    const { task } = req.body;
    ToDoModel
        .create({task})
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
// Logic for Deleting the Data.
function updateToDo(req, res) {
    const { taskId } = req.params;
    const updatedTask = req.body;
    ToDoModel.findByIdAndUpdate(taskId, updatedTask, { new: true })
        .then((updatedToDo) => {
            if (!updatedToDo) {
                return res.status(404).send({ Error: "Task Not Found !!!" });
            } else {
                res.status(201).send("Updated Successfully ...");
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Server Error !!!", error);
        });
}

function deleteToDo(req, res){
    const { taskId } = req.params;
    console.log(`id ----> ${taskId}`);
    ToDoModel
        .findByIdAndDelete(taskId)
            .then(() => {
                res.set(200).send("Deleted Successfully ...")
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Server Error !!!");
            });
}

// Exporting getToDo, saveToDo, deleteToDo, updateToDo.
module.exports = {
    getToDo,
    addToDo,
    updateToDo,
    deleteToDo
}