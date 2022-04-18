const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema({
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Movie", Movie);
