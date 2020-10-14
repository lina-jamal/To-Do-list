const Todos = require("../database/models/Todos");
const todoSchema = require("./validation/todoSchema");

// app.put("/todos/:id", async (req, res, next) => {
const editTodo = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.userData;

  const { title, description, important, done, time } = req.body;
  try {
    await todoSchema
      .validateAsync({ title, description, important, done, time })
      .catch((error) => {
        throw error.details;
      });
    const todoEdit = await Todos.findByIdAndUpdate(
      id,
      { userId, title, description, important, done, time },
      { new: true }
    );
    res.json({ msg: "todo updated", todoEdit });
  } catch (err) {
    next(err);
  }
};
module.exports = editTodo;
