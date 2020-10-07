const todoSchema = require("./validation/todoSchema");
const Todos = require("../database/models/Todos");

module.exports = async (req, res, next) => {
  console.log(req.body);

  const { title, description, important, done, time } = req.body;
  try {
    const { error } = await todoSchema.validate(
      { title, description, important, done, time },
      { abortEarly: false }
    );
    if (error) {
      throw error.details;
    }
    const interfereTime = await Todos.find({ userID: 99999, time });
    if (interfereTime.length === 0) {
      await Todos.create({
        userID: 99999,
        title,
        description,
        important,
        done,
        time,
      });
      res.json("Todo successfully created ");
    } else {
      res.json("Sorry ... You have interfere at this time");
    }
  } catch (err) {
    next(err);
  }
};
