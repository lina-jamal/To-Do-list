const todo = require("../models/Todos");

const todoQueries = {};

todoQueries.createTodo = ({
  userID,
  title,
  description,
  important,
  done,
  time,
}) =>
  todo.create({ userID, title, description, important, done, category, time });

todoQueries.deleteTodo = (id) => todo.findByIdAndDelete(id);

todoQueries.findTasksByUserID = (userID) => todo.find({ userID });

todoQueries.editTodo = (id, { title, description, important, done, time }) =>
  todo.findByIdAndUpdate(id, { title, description, important, done, time });

module.exports = todoQueries;
