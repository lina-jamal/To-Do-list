const { Schema, model } = require("mongoose");

const TodosSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
  },
  important: {
    type: Boolean,
    default: false,
  },
  done: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = model("Todos", TodosSchema);
