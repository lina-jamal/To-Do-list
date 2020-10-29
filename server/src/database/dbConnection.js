const mongoose = require("mongoose");

require("env2")("config.env");

let dbURI;
switch (process.env.NODE_ENV) {
  case "production":
    dbURI = process.env.MONGO_URI;
    break;
  case "development":
    dbURI = process.env.DEV_URI;
    break;

  default:
    throw new Error("No Database URL!!!");
}
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("database connection successful"))
  .catch((e) => {
    console.error("Connection error :=>", e.message);
  });

const connection = mongoose.connection;

module.exports = connection;
