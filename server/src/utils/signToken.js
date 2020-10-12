const jwt = require("jsonwebtoken");
require("env2")("./config.env");

const { SECRET_KEY } = process.env;

const signToken = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

module.exports = signToken;
