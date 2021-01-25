const { Schema, model } = require("mongoose");

const book = new Schema({
  //examples
  title: String,
  description: {
    type: String,
    requires: true,
  },
  pages: {
    type: Number,
    requires: true,
    default: 155,
  },
});

module.exports = model("Book", book);
