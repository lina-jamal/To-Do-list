const router = require("express").Router();
const {
  addTodo,
  getTodos,
  clientError,
  serverError,
} = require("./controllers");

router.post("/Todo", addTodo);
router.get("/Todos", getTodos);

router.use(clientError);
router.use(serverError);

module.exports = router;
