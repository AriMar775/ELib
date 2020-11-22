const { Schema, model } = require("mongoose");

const book = new Schema({
  //examples
  title: String,
  title2: {
    type: String,
    requires: true,
  },
  desc: {
    type: Number,
    requires: true,
  },
});

module.exports = model("Book", book);
