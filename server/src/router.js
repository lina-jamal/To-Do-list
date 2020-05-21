const router = require("express").Router();
const todo = require("./database/models/Todos");
router.get("/", (req, res) => {
  res.send("hi");
});
// router.post("/todo", (req, res) => {
//   const todo = new todo({
//     title: req.body.title,
//     description: req.body.description,
//     important: req.body.important,
//     done: req.body.done,
//   });
//   todo
//     .save()
//     .then((gg) => {
//       res.json(gg);
//     })
//     .catch((err) => console.error(err));
// });
module.exports = router;
