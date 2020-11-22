const express = require("express");
const example = express.Router();

example.get("/", function (req, res) {
  res.json("GET request to the homepage");
});
example.post("/", function (req, res) {
  res.json("POST request to the homepage");
});

module.exports = example;
