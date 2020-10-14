const Todos = require("../database/models/Todos");

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todos.findByIdAndDelete(id);
    if (deletedTodo != null) {
      res.json("todo deleted successfully");
    } else {
      res.json("No todo found with this id ");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTodo;
