const Todos = require("../database/models/Todos");
const getTodos = async (req, res, next) => {
  try {
    const todos = await Todos.find({});
    if (todos.length > 0) {
      res.status(200).json(todos);
    } else {
      res.status(400).json([]);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = getTodos;
