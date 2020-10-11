const router = require("express").Router();
const {
  addTodo,
  getTodos,
  clientError,
  serverError,
  googleLogin,
} = require("./controllers");
router.post("/login/google", googleLogin);

router.post("/Todo", addTodo);
router.get("/Todos", getTodos);

router.use(clientError);
router.use(serverError);

module.exports = router;
