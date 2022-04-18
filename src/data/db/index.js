const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/movies_db");
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connect };
