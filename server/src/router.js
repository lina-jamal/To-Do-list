const router = require("express").Router();
const {
  addTodo,
  getTodos,
  editTodo,
  deleteTodo,
  clientError,
  serverError,
  googleLogin,
} = require("./controllers");
const Auth = require("./middleware/Auth");
router.post("/login/google", googleLogin);
router.use(Auth);
router.get("/auth", (req, res) => {
  res.json(req.userData);
});

router.post("/Todo", addTodo);
router.put("/Todos/:id", editTodo);
router.delete("/Todos/:id", deleteTodo);
router.get("/Todos", getTodos);

router.use(clientError);
router.use(serverError);

module.exports = router;
