const Todos = require("../database/models/Todos");
const getTodos = async (req, res, next) => {
  try {
    const { userId } = req.userData;
    const todos = await Todos.find({ userID: userId });

    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
};
module.exports = getTodos;
