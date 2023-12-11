const { Router } = require("express"); // Object Destructuring {} --- Router class from express module Not the entire express module.
const { getToDo, addToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController"); // Object Destructuring {} --- Specific Function from ToDoController.js.
const router = Router();

// 1. Defining the Get Route.
router.get('/', getToDo);

// 2. Defining the Add Route.
router.post('/add', addToDo);

// 3. Defining the Update Route.
router.put('/update/:taskId', updateToDo);

// 4. Defining the Delete Route.
router.delete('/delete/:taskId', deleteToDo);

module.exports = router;