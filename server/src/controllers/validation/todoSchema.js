const Joi = require("@hapi/joi");

module.exports = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  important: Joi.boolean(),
  done: Joi.boolean(),
  time: Joi.date().required(),
});
