// const router = require("express").Router();
// const todo = require("./database/models/Todos");
// router.get("/hi", (req, res) => {
//   res.send("hi");
// });
// router.post("/todo", (req, res) => {
//   const { title, description, important, userID, done } = req.body;
//   const Todo = new todo({
//     title,
//     description,
//     important,
//     userID,
//     done,
//   });
//   Todo.save()
//     .then((gg) => {
//       res.json(gg);
//     })
//     .catch((err) => console.error(err));
// });
// module.exports = router;

const router = require("express").Router();
const { addTodo } = require("./controllers");

router.post("/Todo", addTodo);

module.exports = router;
