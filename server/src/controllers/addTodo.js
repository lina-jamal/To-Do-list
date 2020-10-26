const todoSchema = require("./validation/todoSchema");
const Todos = require("../database/models/Todos");

const addTodo = async (req, res, next) => {
  const { title, description, important, done, time } = req.body;
  const { userId } = req.userData;

  try {
    await todoSchema
      .validateAsync({ title, description, important, done, time })
      .catch((error) => {
        throw error.details;
      });
    const interfereTime = await Todos.find({ userID: userId, time });
    if (interfereTime.length === 0) {
      await Todos.create({
        userID: userId,
        title,
        description,
        important,
        done,
        time,
      });
      res.json("Todo successfully created ");
    } else {
      res.status(400).json("Sorry ... You have interfere at this time");
    }
  } catch (err) {
    next(err);
  }
};
module.exports = addTodo;
