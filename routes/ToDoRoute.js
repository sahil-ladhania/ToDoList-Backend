// The "routes" folder in a backend application is typically used to store code that handles incoming requests from clients and determines how those requests should be handled by the server.

// Import Router class from express Module.
// const express = require('express');
const { Router } = require("express"); // Object Destructuring {} --- Router class from express module Not the entire express module.

// Import Function from from Controller Folder.
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController"); // Object Destructuring {} --- Specific Function from ToDoController.js.

// const router = express.Router();
const router = Router();

// Creating Routes.

// 1. Define the Get Route.

// 1.  router.get("/", getToDo);

// 2.  router.get('/', (req, res) => {
//        res.send(getToDo);
//     });

// So, the main difference is that the first line of code uses a named function as a callback, while the second line of code uses an anonymous function. Additionally, the first line assumes that getToDo returns a response object, while the second line assumes that getToDo returns a value that can be sent as the response.

router.get('/', getToDo);

// 2. Defining the Save Route.
router.post('/save', saveToDo);

// 3. Defining the Update Route.
router.post('/update', updateToDo);

// 4. Defining the Delete Route.
router.post('/delete', deleteToDo);

// Export the Route.
module.exports = router;