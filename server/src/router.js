const router = require("express").Router();
const { addTodo } = require("./controllers");

router.post("/Todo", addTodo);

module.exports = router;
