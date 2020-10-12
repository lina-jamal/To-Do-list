const router = require("express").Router();
const {
  addTodo,
  getTodos,
  clientError,
  serverError,
  googleLogin,
} = require("./controllers");
const Auth = require("./middleware/Auth");
router.post("/login/google", googleLogin);
router.use(Auth);

router.post("/Todo", addTodo);
router.get("/Todos", getTodos);

router.use(clientError);
router.use(serverError);

module.exports = router;
