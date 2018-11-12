var mongoose = require("mongoose");

//Promise command is generataed
mongoose.Promise = global.Promise;
//Mongoose connects to the database
mongoose.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true }
);

module.exports = { mongoose: mongoose };
