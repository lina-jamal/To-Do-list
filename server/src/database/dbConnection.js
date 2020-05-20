const mongoose = require("mongoose");
require("env2")("config.env");

let dbURI = "";
if (process.env.NODE_ENV === "production") {
  dbURI = process.env.PRODUCT_URI;
} else {
  dbURI = process.env.DEV_URI;
}
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection error :=>", e.message);
  });

const connection = mongoose.connection;

module.exports = connection;
